<template>
    <div>
        <h1>这是App组件</h1>
        <h2>按扭组件的使用</h2>
        <hr />
        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
        <mt-button type="danger" size="small">small 小按扭</mt-button>
        <mt-button size="large">large 长按扭</mt-button>
        <mt-button type="danger" size="normal">normal 普通</mt-button>
        <mt-button  type="danger" disabled>禁用按钮</mt-button>
        <mt-button type="primary" plain>幽灵按钮</mt-button>
        <p>带图标按扭</p>
        <mt-button icon="back">back</mt-button>
        <mt-button icon="more">更多</mt-button>
        <p>绑定click事件</p>
        <mt-button @click.native="btClick">点击触发 handleClick</mt-button>
        <p</p>
        <h2>Toast组件</h2>
        <hr />
        <mt-button @click.native="toastClick">点我触发Toast组件</mt-button>
    </div>
</template>


<script>
//导入Toast组件,才可以使用.
import { Toast } from 'mint-ui';

export default {
    data(){
        return {}
    },
    methods:{
        btClick: function(){
            //输出参数对象.
            console.log(arguments);
        },
        toastClick:function(){
            Toast({
                message: '操作成功',
                //引入了bootstrap中的图标.(官方提示,图标自行准备)
                iconClass: 'glyphicon glyphicon-user',
                className: 'red',//提定类名,以方便改样式.
            });
        }
    }
}
</script>

<style>
    .red{
        color: red;
    }
</style>

