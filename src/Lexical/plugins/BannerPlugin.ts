import {
    $createParagraphNode,
    $getSelection,
    $isRangeSelection,
    COMMAND_PRIORITY_LOW,
    createCommand,
    ElementNode,
} from 'lexical'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $setBlocksType } from '@lexical/selection'

export class BannerNode extends ElementNode {
    static getType() {
        return 'banner'
    }
    static clone(node) {
        return new BannerNode(node.__key)
    }
    static importJSON(serializedNode) {
        // serializedNode에서 필요한 데이터를 추출하여 BannerNode를 생성합니다.
        // 예제에서는 특별한 상태가 없으므로, 기본 생성자만 호출합니다.
        return new BannerNode()
    }

    // 역직렬화: JSON 객체로부터 노드의 상태를 복원합니다.
    exportJSON() {
        const baseSerializedNode = super.exportJSON()
        return {
            ...baseSerializedNode,
            type: this.getType(),
            version: 1,
            // 필요한 경우, 여기에 추가적인 상태 데이터를 포함시킵니다.
        }
    }

    createDOM(_config, _editor) {
        const element = document.createElement('div')
        element.className = _config.theme.banner
        return element
    }

    updateDOM() {
        return false
    }
    insertNewAfter(selection, restoreSelection) {
        const newBlock = $createParagraphNode()
        const direction = this.getDirection()
        newBlock.setDirection(direction)
        this.insertAfter(newBlock, restoreSelection)
        return newBlock
    }

    collapseAtStart() {
        const paragraph = $createParagraphNode()
        const children = this.getChildren()
        children.forEach((child) => paragraph.append(child))
        this.replace(paragraph)
        return true
    }
}

export function $createBannerNode() {
    return new BannerNode()
}

export function $isBannerNode(node) {
    return node instanceof BannerNode
}

export const INSERT_BANNER_COMMAND = createCommand('insertBanner')
export function BannerPlugin() {
    const [editor] = useLexicalComposerContext()
    if (!editor.hasNodes([BannerNode])) {
        throw new Error('BannerPlugin: BannerNode nor registered on editor')
    }
    editor.registerCommand(
        INSERT_BANNER_COMMAND,
        () => {
            const selection = $getSelection()
            if ($isRangeSelection(selection)) {
                $setBlocksType(selection, $createBannerNode)
            }
            return true
        },
        COMMAND_PRIORITY_LOW
    )
    return null
}

//text node cant' have children
//element node have children
//decorator node dont have children
