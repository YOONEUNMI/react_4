import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { UserState } from "../store/user/userSlice";
import { Link, useLocation, useParams } from "react-router-dom";

export const Header = (): JSX.Element => {
    const { pathname } = useLocation();

    // redux selector로 값 받아오기

    useEffect(() => {
        // pathName 변경 할때마다  console.log
        console.log(pathname);
    }, [pathname]);

    return (
        <div className="header">
            <div>{pathname !== "/" && <Link to="/">Home으로 돌아가기</Link>}</div>
            <div>접속자 이름 :</div>
            {/* {userInfo.userName && <div>접속자 이름 : {userInfo.userName}</div>} */}
        </div>
    );
};
