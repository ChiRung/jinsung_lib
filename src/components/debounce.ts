/**
 * 일정시간 내 함수의 반복 호출 속도를 제한한다.
 * @param { Function } func callback function
 * @param { number} delay 딜레이 시킬 ms 시간
 * @returns { Function } 반복 호출 방지 처리된 함수
 * @example const newFuncVariable = debounce(originFunc, 250);
 * newFuncVariable(); // 초기 호출됨
 * newFuncVariable(); // 250ms 안 지나면 호출 x
 * newFuncVariable(); // 250ms 지나면 호출 o
 * // 이때, 이 debounce 함수는 함수를 return하기 때문에 다른 함수에서 return하거나 호출하는게 아니라 위의 예시처럼 변수에 할당하여 호출하여야 한다.
 */
export function debounce(func: Function, delay: number) : Function {
    let timeoutId: any;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, arguments), delay);
    }
}