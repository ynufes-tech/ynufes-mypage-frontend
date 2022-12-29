export const useIsLoggedIn = async () => {
  const url = "https://ynufes-mypage.shion.pro/api/v1/user/info";
  // const authToken = useRequestHeaders(["authorization"]);
  const authToken = "";

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

// {"name_first":"","name_last":"","type":0,"profile_icon_url":"https://profile.line-scdn.net/0hEzrTM20AGlVfLQycG1pkKi99GT98XENHdk1WM216RTEwH1lXJBlXM2ovRWc3Tw9TJEhSYTkoE21TPm0zQXvmYVgdRGJmG1oAdkJQtQ","status":0}
