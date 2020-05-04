<?php
/*
 * David Bray
 * BrayWorth Pty Ltd
 * e. david@brayworth.com.au
 *
 * MIT License
 *
*/

namespace site;

class application {
	static function run() {
		www::instance()->serve( $_SERVER['REQUEST_URI']);

	}

}
