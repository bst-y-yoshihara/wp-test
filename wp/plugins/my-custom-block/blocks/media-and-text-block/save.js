import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { imageUrl, imageAlt, title, content } = attributes;

	return (
		<div {...useBlockProps.save({ className: 'custom-media-text-container' })}>
			{/* 左側：画像エリア */}
			<div className="custom-media-left">
				{imageUrl && (
					<img src={imageUrl} alt={imageAlt} />
				)}
			</div>

			{/* 右側：テキストエリア */}
			<div className="custom-text-right">
				<RichText.Content
					tagName="h3"
					className="custom-title-top"
					value={title}
				/>
				<RichText.Content
					tagName="p"
					className="custom-content-bottom"
					value={content}
				/>
			</div>
		</div>
	);
}