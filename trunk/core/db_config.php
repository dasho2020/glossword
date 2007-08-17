<?php
if (!defined('IS_CLASS_GW_CFG')) { define('IS_CLASS_GW_CFG', 1);
class glossword_db_config {
	var $sys;
	function glossword_db_config()
	{
		/* Database settings */
		$sys['db_host'] = 'localhost';
		$sys['db_name'] = 'glossword_1_9';
		$sys['db_user'] = 'root';
		$sys['db_pass'] = 'root';
		$sys['table_prefix'] = 'gw_';
		$sys['db_driver'] = 'mysqli';
		/* Path names */
		$sys['server_proto'] = 'http://';
		$sys['server_host'] = '127.0.0.1';
		$sys['server_dir'] = '/svn/glossword';
		/* Path to sources */
		$sys['path_lib'] = 'libraries';
		$sys['path_img'] = 'images';
		$sys['path_lib_mod'] = 'libraries_mod';
		$sys['path_db'] = 'database';
		$sys['path_tpl'] = 'templates';
		$sys['path_temp'] = 'temp';
		$sys['file_index'] = 'index.php';
		$sys['file_login'] = 'login.php';
		$sys['file_admin'] = 'tkit_admin.php';
		$sys['file_css'] = 'css.php';
		$sys['server_url'] = $sys['server_proto'].$sys['server_host'].$sys['server_dir'];
		$sys['path_css_script'] = $sys['server_proto'].$sys['server_host'].$sys['server_dir'];
		$sys['token'] = '3a437e7d';
		$this->sys =& $sys;
	}
	function v($variable)
	{
		if ($variable) { return $this->sys[$variable]; }
		else { return $this->sys; }
	}
	function a($variable, $value)
	{
		$this->sys[$variable] = $value;
	}
}}
?>