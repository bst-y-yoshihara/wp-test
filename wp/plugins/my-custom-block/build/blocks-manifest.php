<?php
// This file is generated. Do not modify it manually.
return array(
	'accordion-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/accordion-block',
		'version' => '0.1.0',
		'title' => 'アコーディオン（FAQ）',
		'category' => 'design',
		'icon' => 'arrow-down-alt2',
		'description' => 'クリックすると開閉する、よくある質問（FAQ）用のブロックです。',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'my-custom-block',
		'attributes' => array(
			'question' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.accordion-trigger',
				'default' => ''
			),
			'answer' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.accordion-content-inner',
				'default' => ''
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'media-and-text-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/media-and-text-block',
		'version' => '0.1.0',
		'title' => '画像・テキスト（左右並び）',
		'category' => 'design',
		'icon' => 'columns',
		'description' => '左に画像、右にタイトルと本文を配置するブロックです。',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'my-custom-block',
		'attributes' => array(
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'title' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'h3',
				'default' => ''
			),
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p',
				'default' => ''
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'text-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/text-block',
		'version' => '0.1.0',
		'title' => 'テキスト表示用',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'テキスト用のブロックです。',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'my-custom-block',
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p',
				'default' => ''
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
