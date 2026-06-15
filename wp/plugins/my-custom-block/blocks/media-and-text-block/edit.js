import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import './editor.scss'; // 管理画面用のデザインファイルを読み込む命令

export default function Edit({ attributes, setAttributes }) {
    const { imageUrl, imageAlt, title, content } = attributes;

    // 画像が選択された時の処理
    const onSelectImage = (media) => {
        setAttributes({
            imageUrl: media.url,
            imageAlt: media.alt || 'ブロック画像',
        });
    };

    // 画像を削除する処理
    const onRemoveImage = () => {
        setAttributes({ imageUrl: '', imageAlt: '' });
    };

    return (
        <div { ...useBlockProps({ className: 'custom-media-text-container' }) }>
            {/* 左側：画像エリア */}
            <div className="custom-media-left">
                <MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes={['image']}
						value={imageUrl}
						render={({ open }) => (
							!imageUrl ? (
								<Button isPrimary onClick={open}>
									{__('画像を選択', 'my-custom-block')}
								</Button>
							) : (
								<div className="image-preview-wrapper">
									<img src={imageUrl} alt={imageAlt} />
									<Button isDestructive onClick={onRemoveImage} className="image-remove-button">
										{__('画像を削除', 'my-custom-block')}
									</Button>
								</div>
							)
						)}
					/>
                </MediaUploadCheck>
            </div>

            {/* 右側：テキストエリア */}
            <div className="custom-text-right">
                <RichText
                    tagName="h3"
                    className="custom-title-top"
                    value={title}
                    onChange={(val) => setAttributes({ title: val })}
                    placeholder={__('タイトルを入力...', 'my-custom-block')}
                />
                <RichText
                    tagName="p"
                    className="custom-content-bottom"
                    value={content}
                    onChange={(val) => setAttributes({ content: val })}
                    placeholder={__('本文を入力してください...', 'my-custom-block')}
                />
            </div>
        </div>
    );
}