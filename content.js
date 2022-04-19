function clickBtnByText(str) {
    return new Promise((resolve, reject) => {
        const btns = document.querySelectorAll("button")
        for (let i = 0; i < btns.length; i++) {
            if (btns[i].innerHTML.includes(str) && !btns[i].className.includes("disabled")) {
                btns[i].click()
                console.log(str)
                resolve(true)
                flag = false
                break;
            }
        }
        resolve(false)
    })

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function orderProcess() {
    console.log("starting buying process")
    await sleep(2000)
    await tryUntil(async () => await clickBtnByText("Mua ngay"))
    await sleep(2000)
    await tryUntil(async () => await clickBtnByText("Mua hàng"))
    await sleep(2000)
    await tryUntil(async () => await clickBtnByText("Thanh toán khi nhận hàng"))
    await sleep(2000)
    await tryUntil(async () => await clickBtnByText("Đặt hàng"))
}

const tryUntil = async (fn) => {
    while (true) {
        const success = await fn()
        if (success) {
            break;
        }
        await sleep(100)
    }
}


orderProcess()