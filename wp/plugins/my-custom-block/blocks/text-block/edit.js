import './editor.scss';
import{RichText}from '@wordpress/block-editor';

export default function Edit({attributes,setAttributes}){
	return(
		<RichText
		tagName="p"
		value={attributes.content}
		onChange={(val)=>setAttributes({content:val})}
		placeholder="ここにテキストを入力・・・"
		/>
	);
}