<?php

/**
 * Plugin Name:       webkonditorei Blocks
 * Description:       Eine Reihe von nützlichen Gutenberg Blöcken.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            webkonditorei
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       webkonditorei-blocks
 *
 * @package           create-block
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function webkonditorei_blocks_webkonditorei_blocks_block_init()
{
	register_block_type(__DIR__ . '/build/faq-block');
	register_block_type(__DIR__ . '/build/faq-holder');
	register_block_type(__DIR__ . '/build/hinweis');
	register_block_type(__DIR__ . '/build/tab-holder');
	register_block_type(__DIR__ . '/build/tab-tabs');
	register_block_type(__DIR__ . '/build/tab-content-holder');
	register_block_type(__DIR__ . '/build/tab-content');
}
add_action('init', 'webkonditorei_blocks_webkonditorei_blocks_block_init');
