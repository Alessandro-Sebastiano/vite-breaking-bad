<template>
    <div class="select-btn">
        <select name="options" id="">
            <option value="" disabled selected hidden>Select</option>
            <option value="1">Test</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'SelectComponent',
}
</script>

<style lang="scss" scoped>
.select-btn {


    select {
        padding: 8px 32px;
        margin: 0 10px;
        border-radius: 6px;
        border: 0px;

        &:focus {
            outline: none;
            background-color: none;
        }
    }

}
</style>