import { LexicalComposer } from '@lexical/react/LexicalComposer'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { HeadingNode } from '@lexical/rich-text'
import { ListItemNode, ListNode } from '@lexical/list'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import ToolbarPlugin from './Toolbar/Toolbar.tsx'
import { BannerNode, BannerPlugin } from '@/Lexical/plugins/BannerPlugin.ts'
import {
    Placeholder,
    StyledContentEditable,
} from '@/Lexical/styles/LexicalEditor.styles.tsx'
const theme = {
    heading: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
    },
    text: {
        bold: 'bold',
        italic: 'italic',
    },
    banner: 'banner',
}

function onError(error) {
    console.error(error)
}

function LexicalEditor() {
    const initialConfig = {
        namespace: 'MyEditor',
        theme,
        onError,
        nodes: [HeadingNode, ListNode, ListItemNode, BannerNode],
    }

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <ToolbarPlugin />
            <BannerPlugin />
            <ListPlugin />
            <RichTextPlugin
                contentEditable={
                    <StyledContentEditable />
                    // <ContentEditable className="contentEditable" />
                }
                placeholder={<Placeholder>Enter some text...</Placeholder>}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
        </LexicalComposer>
    )
}
export default LexicalEditor
