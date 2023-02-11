export const validation = {
  required: (v: any) => !!v || '必須項目です',
  maxString: (length: number) => (v: string) =>
    !v ? true : (v && v.length <= length) || length + '文字までです',
  maxFileSize: (size: number) => (v: File[]) =>
    !v[0]
      ? true
      : v[0].size <= size * 1000 * 1000 ||
        'アップロード可能なファイルサイズは' + size + 'MBまでです',
  checkURL: (v: string) =>
    !v
      ? true
      : /^(https?)(:\/\/[-_.!~*'()a-zA-Z0-9;/?:`&=+$,%#]+)$/g.test(v) ||
        '有効なURLを入力してください',
  alreadyExistTag: (v: string, list: (string | null)[]) =>
    !v ? true : !list.includes(v) || '「' + v + '」は既に存在します。'
}
