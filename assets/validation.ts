export const validation = {
  required: (v: any) => !!v || '必須項目です',
  isNumber: (v: number) =>
    !v ? true : Number(v) || '半角数字を入力してください',
  maxString: (length: number) => (v: string) =>
    !v ? true : (v && v.length <= length) || `${length}文字までです`,
  maxFileSize: (size: number) => (v: File[]) =>
    !v[0]
      ? true
      : v[0].size <= size * 1000 * 1000 ||
        `アップロード可能なファイルサイズは${size}MBまでです`,
  checkURL: (v: string) =>
    !v
      ? true
      : /^(https?)(:\/\/[-_.!~*'()a-zA-Z0-9;/?:`&=+$,%#]+)$/g.test(v) ||
        '有効なURLを入力してください',
  checkEmail: (v: string) =>
    !v
      ? true
      : /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/g.test(
          v
        ) || '有効なメールアドレスを入力してください'
}
