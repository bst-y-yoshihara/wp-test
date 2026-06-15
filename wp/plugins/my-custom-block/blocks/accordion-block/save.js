import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { question, answer } = attributes;

	return (
		<div {...useBlockProps.save({ className: 'custom-accordion-block' })}>
			{/* 質問（ボタンにしてクリック可能にする） */}
			<button className="accordion-header" aria-expanded="false">
				<span className="accordion-icon-q">Q</span>
				<RichText.Content tagName="span" className="accordion-trigger" value={question} />
				<span className="accordion-arrow"></span>
			</button>

			{/* 回答（最初はCSSで非表示にする） */}
			<div className="accordion-content">
				<div className="accordion-content-box">
					<span className="accordion-icon-a">A</span>
					<RichText.Content tagName="div" className="accordion-content-inner" value={answer} />
				</div>
			</div>
		</div>
	);
}