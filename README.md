# Vue 3 + Vite

# 准备环境

```bash 
pnpm create vite@latest vue3-tutorial
cd vue3-tutorial
pnpm install
pnpm run dev
```
# 添加 eslint 代码规范检查
```bash
npm init @eslint/config
```
# 编写验证代码
```javascript
console.log('this is a error no-undef: %d', app.count)
```
# 验证
```bash
pnpm run lint
```
# 输出结果
```
error  'app' is not defined  no-undef
```
# 修改自定义代码规则
```json
 "rules": {
        "no-undef" : ["warn"] 
    }
```
# 再次验证
```bash
pnpm run lint
```
# 输出结果
```
warning  'app' is not defined  no-undef
```