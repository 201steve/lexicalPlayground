import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $getSelection, $isRangeSelection } from 'lexical'
import { $setBlocksType } from '@lexical/selection'
import { $createHeadingNode } from '@lexical/rich-text'
import {
    INSERT_ORDERED_LIST_COMMAND,
    INSERT_UNORDERED_LIST_COMMAND,
} from '@lexical/list'
import { INSERT_BANNER_COMMAND } from '@/Lexical/plugins/BannerPlugin.ts'
import { ToolbarWrapper } from '@/Lexical/styles/LexicalEditor.styles.tsx'
export const HeadingToolbarPlugin = () => {
    const [editor] = useLexicalComposerContext()
    const headingTags = ['h1', 'h2', 'h3']
    const onClick = (tag) => {
        editor.update(() => {
            const selection = $getSelection()
            if ($isRangeSelection(selection)) {
                $setBlocksType(selection, () => $createHeadingNode(tag))
            }
        })
    }
    return (
        <div>
            {headingTags.map((tag) => (
                <button key={tag} onClick={() => onClick(tag)}>
                    {tag.toUpperCase()}
                </button>
            ))}
        </div>
    )
}

export const ListToolbarPlugin = () => {
    const [editor] = useLexicalComposerContext()
    const listTags = ['ol', 'ul']
    const onClick = (tag) => {
        if (tag === 'ol') {
            editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
            return
        }
        editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
    }
    return (
        <div>
            {listTags.map((tag) => (
                <button key={tag} onClick={() => onClick(tag)}>
                    {tag.toUpperCase()}
                </button>
            ))}
        </div>
    )
}

export function BannerToolbarPlugin() {
    const [editor] = useLexicalComposerContext()
    const onClick = () => {
        editor.dispatchCommand(INSERT_BANNER_COMMAND, undefined)
    }
    return <button onClick={onClick}>Banner</button>
}
export const ToolbarPlugin = () => {
    return (
        <ToolbarWrapper>
            <HeadingToolbarPlugin />
            <ListToolbarPlugin />
            <BannerToolbarPlugin />
        </ToolbarWrapper>
    )
}

export default ToolbarPlugin
