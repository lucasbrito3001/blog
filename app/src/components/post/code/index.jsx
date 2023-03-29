// import hljs from 'highlight.js'

import { CopyBlock, a11yLight, codepen, github, googlecode, paraisoLight } from 'react-code-blocks'

import "./styles.scss";
import { useEffect } from 'react';

export default function Code({ code, lang = 'typescript', showLineNumbers = true }) {

    return (
        <div className='code-block'>
            <CopyBlock
                language={lang}
                text={code}
                showLineNumbers={showLineNumbers}
                theme={paraisoLight}
                wrapLines={true}
                codeBlock
            />
        </div>
    );
}
