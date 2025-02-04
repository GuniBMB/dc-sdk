# Change Log

### 2.2.0 - 2021-05-09

#### Breaking Changes 📣

- 升级 Cesium 到 1.81.0 版本

#### Additions 🎉

- 添加动态图层
- 添加动态模型和动态图覆盖物
- 添加模型管理功能，用于模型的展开、合并

### 2.1.4 - 2021-04-24

#### Additions 🎉

- 添加创建TMS、Grid、Mapbox、MapboxStyle的地图函数
- 添加剖切分析模块，包括：地球裁剪、地形裁剪
- 添加近地天地盒

#### Fixes 🔧

- 完善标绘功能和解决issue[#26](https://github.com/dvgis/dc-sdk/issues/26)
- 完善模型位置编辑工具
- 解决FeatureGridLayer显示和隐藏问题

### 2.1.3 - 2021-04-17

#### Additions 🎉

- 开放部分 Cesium 内部函数
- 添加 FeatureGridLayer

#### Fixes 🔧

- 修复部分军标无法使用的问题[#24](https://github.com/dvgis/dc-sdk/issues/24)
- 重写 logo 的实现方式

#### Additions 🎉

- 添加 DivIcon 鼠标移入和移出功能
- 添加地图当前分辨率和视野范围属性

### 2.1.2 - 2021-04-10

#### Additions 🎉

- 添加 DivIcon 鼠标移入和移出功能
- 添加地图当前分辨率和视野范围属性

#### Fixes 🔧

- 修复绕点环绕和绕地环绕会多次点击会加速的问题[#22](https://github.com/dvgis/dc-sdk/issues/22)
- 修复覆盖物为倾斜摄影时，鼠标事件无法使用的问题[#23](https://github.com/dvgis/dc-sdk/issues/23)

### 2.1.1 - 2021-04-06

#### Fixes 🔧

- 修复部分模块版本号不统一的问题

### 2.1.0 - 2021-04-03

#### Breaking Changes 📣

- 升级 Cesium 到 1.80.0 版本

#### Additions 🎉

- 添加 GeoTools 工具类，主要利用 Turf 进行覆盖物的相关计算

#### Fixes 🔧

- 修改 HtmlLayer 设置 show 的错误问题
- 完善 accessToken 的认证规则

### 2.0.0 - 2021-03-27

#### Breaking Changes 📣

- 重构整个框架代码，将代码模块化处理
- 整合之前分散的模块
- 重构了各个模块包中对 DC 的依赖
- 重新开发了用户手册
- 支持自定安装和整体安装的方式引入 DC

#### Additions 🎉

- 添加 token 认证功能。认证通过可以使用一些分析、点位编辑功能
- 添加 turf 模块的支持，可以通过 `const {turf} = DC.Namespace` 获取 turf

#### Fixes 🔧

- 修改 location bar 时间延迟问题
- 修改雷达扫描材质设置速度无效的问题
