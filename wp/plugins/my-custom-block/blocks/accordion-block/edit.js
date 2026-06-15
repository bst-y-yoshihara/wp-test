import './editor.scss';
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
	const { question, answer } = attributes;

	return (
		<div {...useBlockProps({ className: 'custom-accordion-block is-edit' })}>
			{/* 質問入力欄 */}
			<div className="accordion-header-editor">
				<span className="accordion-icon-q">Q</span>
				<RichText
					tagName="div"
					className="accordion-trigger"
					value={question}
					onChange={(val) => setAttributes({ question: val })}
					placeholder={__('質問を入力してください...', 'my-custom-block')}
				/>
			</div>

			{/* 回答入力欄 */}
			<div className="accordion-content-editor">
				<span className="accordion-icon-a">A</span>
				<RichText
					tagName="div"
					className="accordion-content-inner"
					value={answer}
					onChange={(val) => setAttributes({ answer: val })}
					placeholder={__('回答を入力してください...', 'my-custom-block')}
				/>
			</div>
		</div>
	);
}