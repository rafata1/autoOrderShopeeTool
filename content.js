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
    // await tryUntil(async () => await clickBtnByText("V1 LIMITED + HỘP JJK"))
    // await sleep(500)
    while (true) {
        if (time.getTime() > new Date("2022-4-19 14:58:59")) {
            console.log("waiting for reload")
            location.reload()
            break
        }
    }
    console.log("starting buying process")
    await tryUntil(async () => await clickBtnByText("Mua ngay"))
    await sleep(3000)
    await tryUntil(async () => await clickBtnByText("Mua hàng"))
    await sleep(3000)
    await tryUntil(async () => await clickBtnByText("Thanh toán khi nhận hàng"))
    await tryUntil(async () => await clickBtnByText("Đặt hàng"))
}

const tryUntil = async (fn) => {
    while (true) {
        const time = new Date()
        if (time.getTime() > new Date("2022-4-19 19:59:59")) {
            const success = await fn()
            if (success) {
                break;
            }
        }
        await sleep(100)
    }
}


orderProcess()