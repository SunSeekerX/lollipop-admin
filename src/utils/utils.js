import useClipboard from 'vue-clipboard3'

const { toClipboard } = useClipboard()

export async function copy(text) {
  await toClipboard(text)
}
