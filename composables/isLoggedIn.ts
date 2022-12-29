export const useIsLoggedIn = () => {
  const url = "https://ynufes-mypage.shion.pro/api/v1/user/info";
  const authToken = useRequestHeaders(["authorization"]);

  // if (typeof authToken !== "string") return false;
  if (typeof authToken !== "string")
    return console.log(
      "トークンがstring型出ないため事前にログインユーザでないと判定しました。"
    );

  const headers = new Headers({
    Authorization: `Bearer ${authToken}`,
  });

  const { data, error }: any = useFetch(url, {
    method: "GET",
    headers: headers,
  });

  // if (!error || !data) return false;
  if (!error || !data)
    return console.log("バックエンドAPIから情報を得られませんでした。");
  // if (error.value) return false;
  if (error.value) return console.log("fetch関数が正常に動作していません。");
  // if (data?.error === "INVALID Authorization Header") return false;
  if (data?.error === "INVALID Authorization Header")
    return console.log("不適切なトークンです。");
  // return true;
  return console.log("適切なトークンです。ログインユーザと判定します。");
};
