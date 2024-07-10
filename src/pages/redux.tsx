import React from "react";
import { useDispatch } from "react-redux";
import { setUserName } from "../store/user/userSlice";

export const ReduxEx = (): JSX.Element => {
    // useDispatch 사용 하여 값을 업데이트 처리해주기
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Header에 내 이름 보내기.</h3>

            <div>
                {/* change: 포커스가 해제되기 전 값에 변화가 있으면 발생
                    blur: 포커스가 해제된 후 발생 */}
                <input
                    placeholder="이름을 입력해주세요."
                    type="text"
                    // onBlur={(e) => {
                    //     console.log(e.target.value);
                    // }}
                    // onChange={(e) => {
                    //     console.log(e.target.value);
                    // }}
                />
            </div>
        </div>
    );
};
