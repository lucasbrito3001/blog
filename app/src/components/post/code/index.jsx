import hljs from 'highlight.js'

import "./styles.scss";
import { useEffect } from 'react';

export default function Code({ code }) {
    useEffect(() => {
        hljs.highlightAll()
    }, [])

    return (
        <pre className='rounded'><code className="language-js px-4">{ code }</code></pre>
    );
}
