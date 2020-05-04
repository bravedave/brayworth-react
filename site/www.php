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

class www {
    protected $manifest;

    protected function __construct( $manifest) {
        $this->manifest = $manifest;
        // error_log( $manifest);

    }

    static function instance( string $manifest) : self {
        return new self( $manifest);

    }

    function serve( $option) {
        if ( $option) $option = trim( $option, '/');
        if ( !$option) $option = 'index.html';
        if ( $_manifest_file = realpath( sprintf( '%s/asset-manifest.json', $this->manifest))) {
            if ( 'manifest.json' == $option) {
                $_path = sprintf( '%s/%s', $this->manifest, $option);

            }
            else {
                $_manifest = json_decode( file_get_contents( $_manifest_file));
                $_path = false;
                foreach($_manifest as $_p) {
                    if ( ltrim( $_p, './') == $option) {
                        $_path = sprintf( '%s/%s', $this->manifest, ltrim( $_p, './'));

                    }

                }

            }

            if ( $_path) {
                if ( $_file = realpath( $_path)) {
                    \sys::serve( $_file);

                } else { printf( '%s - file not found', $_path); }

            } else { printf( '%s - not set<br />', $option); }

        } else { printf( '%s - manifest not found', $_manifest_file); }

        // if we find a static file serve it, otherwise serve index

    }

}
