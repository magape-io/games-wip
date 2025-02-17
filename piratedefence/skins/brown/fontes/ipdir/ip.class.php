<?php
/*
	[Destoon B2B System] Copyright (c) 2008-2013 Destoon.COM
	This is NOT a freeware, use is subject to license.txt
*/
//defined('IN_DESTOON') or exit('Access Denied');
class ip {
	var $ip;
	var $iptype;
	var $ipfile;

	function ip($ip, $type = '') {
		$this->ip = $ip;
		$this->iptype = $type;
	}

	function area() {
		
		if($this->iptype) {
			$func = $this->iptype;
			
			$this->ipfile = P_ROOTip.'/ipdir/ipdata/'.$func.'.dat';
			return $this->$func();
		}
		foreach(array('wry', 'tiny', 'sina', 'youdao') as $d) {
			$ipfile = P_ROOTip.'/ipdir/ipdata/'.$d.'.dat';
			if(is_file($ipfile)) {
				$this->ipfile = $ipfile;
				return $this->$d();
				
			}
		}
		return 'Unknown';
	}

	function wry() {
		if(!$fd = @fopen($this->ipfile, 'rb')) return 'Invalid IP data file';
		$ip = explode('.', $this->ip);
		$ipNum = $ip[0] * 16777216 + $ip[1] * 65536 + $ip[2] * 256 + $ip[3];
		if(!($DataBegin = fread($fd, 4)) || !($DataEnd = fread($fd, 4)) ) return;
		@$ipbegin = implode('', unpack('L', $DataBegin));
		if($ipbegin < 0) $ipbegin += pow(2, 32);
		@$ipend = implode('', unpack('L', $DataEnd));
		if($ipend < 0) $ipend += pow(2, 32);
		$ipAllNum = ($ipend - $ipbegin) / 7 + 1;
		$BeginNum = $ip2num = $ip1num = 0;
		$ipAddr1 = $ipAddr2 = '';
		$EndNum = $ipAllNum;
		while($ip1num > $ipNum || $ip2num < $ipNum) {
			$Middle= intval(($EndNum + $BeginNum) / 2);
			fseek($fd, $ipbegin + 7 * $Middle);
			$ipData1 = fread($fd, 4);
			if(strlen($ipData1) < 4) {
				fclose($fd);
				return 'System Error';
			}
			$ip1num = implode('', unpack('L', $ipData1));
			if($ip1num < 0) $ip1num += pow(2, 32);
			if($ip1num > $ipNum) {
				$EndNum = $Middle;
				continue;
			}
			$DataSeek = fread($fd, 3);
			if(strlen($DataSeek) < 3) {
				fclose($fd);
				return 'System Error';
			}
			$DataSeek = implode('', unpack('L', $DataSeek.chr(0)));
			fseek($fd, $DataSeek);
			$ipData2 = fread($fd, 4);
			if(strlen($ipData2) < 4) {
				fclose($fd);
				return 'System Error';
			}
			$ip2num = implode('', unpack('L', $ipData2));
			if($ip2num < 0) $ip2num += pow(2, 32);
			if($ip2num < $ipNum) {
				if($Middle == $BeginNum) {
					fclose($fd);
					return 'Unknown';
				}
				$BeginNum = $Middle;
			}
		}
		$ipFlag = fread($fd, 1);
		if($ipFlag == chr(1)) {
			$ipSeek = fread($fd, 3);
			if(strlen($ipSeek) < 3) {
				fclose($fd);
				return 'System Error';
			}
			$ipSeek = implode('', unpack('L', $ipSeek.chr(0)));
			fseek($fd, $ipSeek);
			$ipFlag = fread($fd, 1);
		}
		if($ipFlag == chr(2)) {
			$AddrSeek = fread($fd, 3);
			if(strlen($AddrSeek) < 3) {
				fclose($fd);
				return 'System Error';
			}
			$ipFlag = fread($fd, 1);
			if($ipFlag == chr(2)) {
				$AddrSeek2 = fread($fd, 3);
				if(strlen($AddrSeek2) < 3) {
					fclose($fd);
					return 'System Error';
				}
				$AddrSeek2 = implode('', unpack('L', $AddrSeek2.chr(0)));
				fseek($fd, $AddrSeek2);
			} else {
				fseek($fd, -1, SEEK_CUR);
			}
			while(($char = fread($fd, 1)) != chr(0))
			$ipAddr2 .= $char;
			$AddrSeek = implode('', unpack('L', $AddrSeek.chr(0)));
			fseek($fd, $AddrSeek);
			while(($char = fread($fd, 1)) != chr(0))
			$ipAddr1 .= $char;
		} else {
			fseek($fd, -1, SEEK_CUR);
			while(($char = fread($fd, 1)) != chr(0))
			$ipAddr1 .= $char;
			$ipFlag = fread($fd, 1);
			if($ipFlag == chr(2)) {
				$AddrSeek2 = fread($fd, 3);
				if(strlen($AddrSeek2) < 3) {
					fclose($fd);
					return 'System Error';
				}
				$AddrSeek2 = implode('', unpack('L', $AddrSeek2.chr(0)));
				fseek($fd, $AddrSeek2);
			} else {
				fseek($fd, -1, SEEK_CUR);
			}
			while(($char = fread($fd, 1)) != chr(0))
			$ipAddr2 .= $char;
		}
		fclose($fd);
		if(preg_match('/http/i', $ipAddr2)) $ipAddr2 = '';
		$ipaddr = "$ipAddr1 $ipAddr2";
		$ipaddr = preg_replace('/CZ88\.NET/is', '', $ipaddr);
		$ipaddr = preg_replace('/^\s*/is', '', $ipaddr);
		$ipaddr = preg_replace('/\s*$/is', '', $ipaddr);
		if(preg_match('/http/i', $ipaddr) || $ipaddr == '') $ipaddr = 'Unknown';
		return convert($ipaddr, 'GBK', 'utf-8');
	}

	function tiny() {
		static $fp = NULL, $offset = array(), $index = NULL;
		$ipdot = explode('.', $this->ip);
		$ip = pack('N', ip2long($this->ip));
		$ipdot[0] = (int)$ipdot[0];
		$ipdot[1] = (int)$ipdot[1];
		if($fp === NULL && $fp = @fopen($this->ipfile, 'rb')) {
			$offset = unpack('Nlen', fread($fp, 4));
			$index  = fread($fp, $offset['len'] - 4);
		} else if($fp == false) {
			return  'Invalid IP data file';
		}
	
		$length = $offset['len'] - 1028;
		$start = unpack('Vlen', $index[$ipdot[0] * 4].$index[$ipdot[0] * 4 + 1].$index[$ipdot[0] * 4 + 2].$index[$ipdot[0] * 4 + 3]);
		for($start = $start['len'] * 8 + 1024; $start < $length; $start += 8) {
			if ($index{$start} . $index{$start + 1} . $index{$start + 2} . $index{$start + 3} >= $ip) {
				$index_offset = unpack('Vlen', $index{$start + 4} . $index{$start + 5} . $index{$start + 6} . "\x0");
				$index_length = unpack('Clen', $index{$start + 7});
				break;
			}
		}
		fseek($fp, $offset['len'] + $index_offset['len'] - 1024);	 
		if($index_length['len']) return convert(fread($fp, $index_length['len']), 'GBK', 'utf-8');
		return 'Unknown';
	}

	function sina() {
		$api = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip='.$this->ip;
		$data = file_get($api);
		if($data && strpos($data, 'remote_ip_info') !== false) {
			$data = str_replace(array('var remote_ip_info = ', ';'), array('', ''), $data);
			$arr = json_decode($data, true);
			$area = '';
			if(isset($arr['country']) && strpos($data, "\u4e2d\u56fd") === false) $area .= $arr['country'];
			if(isset($arr['province'])) $area .= $arr['province'];
			if(isset($arr['city'])) $area .= $arr['city'];
			if(isset($arr['isp'])) $area .= $arr['isp'];
			return $area ? convert($area, 'UTF-8', 'utf-8') : 'Unknown';
		}
		return 'SINA API Error';
	}

	function youdao() {
		$api = 'http://www.youdao.com/smartresult-xml/search.s?type=ip&q='.$this->ip;
		$data = file_get($api);
		if($data && strpos($data, '<location>') !== false) {
			$t1 = explode('<location>', $data);
			$t2 = explode('</location>', $t1[1]);
			$area = $t2[0];
			return $area ? convert($area, 'GBK', 'utf-8') : 'Unknown';
		}
		return 'YOUDAO API Error';
	}
}
?>