# umi-mobile-starter
 最近打算做一个umi+antd-mobile的脚手架,供组员开始快速开发,最开始的想法是从ant-pro上分离,但是实践之后发现,ant-pro很多布局相关,权限路由相关,主题相关错综复杂,很难单独抽离出来,所以开始plan b.
1.  首先模仿ant-pro的文件夹结构,通过umi单纯构建,然后再默认的umi-react-plugin上配置mobile的相关配置,比如antd-mobile,hd,fastclick等
2.  抛弃ant-pro的复杂权限路由,在请求里处理403的情况跳转403路由
3.  组织基础组件和model
4.  开始开发
## 
感谢 umi官方提供的mobile
相关项目参考