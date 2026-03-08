# MyBatis Log 格式化工具

将 MyBatis SQL 日志（来自 IDEA 控制台、服务器日志等）自动拼接参数，生成可直接执行的 SQL 语句。

[English Version](./README.md)

## 功能特点

- 自动解析 MyBatis 日志中的 SQL 和参数
- 支持多种数据库方言格式化
- 正确处理 NULL 值、空字符串、日期类型等
- 自动转义单引号
- 转换后自动复制到剪贴板

![下载量](https://img.shields.io/badge/utools%20download-24267-blue)

## 支持的数据库方言（21种）

| 数据库 | 方言值 |
|--------|--------|
| Standard SQL | sql |
| MySQL | mysql |
| MariaDB | mariadb |
| PostgreSQL | postgresql |
| Oracle PL/SQL | plsql |
| SQL Server (T-SQL) | tsql, transactsql |
| DB2 | db2, db2i |
| SQLite | sqlite |
| Apache Hive | hive |
| Apache Spark SQL | spark |
| Google BigQuery | bigquery |
| Snowflake | snowflake |
| Amazon Redshift | redshift |
| ClickHouse | clickhouse |
| DuckDB | duckdb |
| TiDB | tidb |
| Trino | trino |
| Couchbase N1QL | n1ql |
| SingleStoreDB | singlestoredb |

## 使用方法

1. 从 IDEA 控制台复制 MyBatis 日志
2. 在 uTools 中输入 `mybatis` 或 `mybatisLog`
3. 日志会自动粘贴并转换
4. 转换后的 SQL 自动复制到剪贴板

## 日志格式示例

```
2024-01-15 10:30:00 DEBUG [main] c.e.m.UserMapper.selectById - ==>  Preparing: SELECT * FROM user WHERE id = ? AND name = ?
2024-01-15 10:30:00 DEBUG [main] c.e.m.UserMapper.selectById - ==> Parameters: 1(Integer), 张三(String)
```

转换结果：
```sql
SELECT
  *
FROM
  user
WHERE
  id = 1
  AND name = '张三'
```

## 更新日志

### v0.2.0
- 新增 11 种数据库方言支持（共 21 种）
- 修复 NULL 值解析错误（之前会被错误转为 'null' 字符串）
- 修复空字符串参数处理
- 修复单引号转义问题（O'Brien -> 'O''Brien'）
- 改进日期类型参数处理
- 改进参数解析，支持包含逗号的值
- 下拉选择器支持搜索过滤
- 更新 sql-formatter 到最新版本

### v0.1.1
- 结果增加 SQL 格式化

### v0.1.0
- 修改参数中带有逗号乱参问题
- 修改关键字匹配

### v0.0.6
- 进入插件后自动转换
- 修改参数前面多余空格

### v0.0.5
- 样式修改

### v0.0.4
- 字符串类型匹配

### v0.0.3
- 从主窗口跳转到插件时自动取值
- 转换后自动复制到粘贴板

### v0.0.2
- 根据论坛反馈 ctrl+c 复制语句之后, 没有呼出插件问题

## 开发

```bash
# 安装依赖
npm install

# 运行测试
node test.js
```

## License

MIT
