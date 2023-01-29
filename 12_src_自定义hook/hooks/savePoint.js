import { reactive, onMounted, onUnmounted } from "vue";

export default function () {
    let point = reactive({
        x: 0,
        y: 0,
    });

    function savePoint(e) {
        point.x = e.pageX;
        point.y = e.pageY;
        console.log(e);
    }

    onMounted(() => {
        window.addEventListener("click", savePoint);
    });

    onUnmounted(() => {
        window.removeEventListener("click", savePoint);
    });

    return point
}