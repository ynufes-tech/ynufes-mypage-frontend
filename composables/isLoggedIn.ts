export const useIsLoggedIn = async () => {
  const url = "https://ynufes-mypage.shion.pro/api/v1/user/info";
  const authToken = useCookie("Authorization");

  if (
    typeof authToken !== "string" ||
    authToken === "" ||
    authToken === undefined ||
    authToken === null
  ) {
    console.log(
      "トークンが正しい型でないため事前にログインユーザでないと判定しました。"
    );
    return false;
  }

  const headers = new Headers({
    Authorization: `Bearer ${authToken}`,
  });

  const { data, error } = await useFetch(url, {
    method: "GET",
    headers: headers,
  });

  if (!error || !data) {
    console.log("バックエンドAPIから一切の情報を得られませんでした。");
    return false;
  }

  if (error.value?.status === 401) {
    console.log(JSON.stringify(error.value.status) + "Unauthorized");
    return false;
  }

  if (data.value) {
    console.log("適切なトークンです。ログインユーザと判定します。");
    return true;
  }
};
