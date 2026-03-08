# MyBatis Log Formatter ![下载量](https://img.shields.io/badge/utools%20download-24267-blue)

Automatically concatenates parameters from MyBatis SQL logs (from IDEA console, server logs, etc.) to generate directly executable SQL statements.

[中文版](./README_ZH.md)

## Features

- Automatically parse SQL and parameters from MyBatis logs
- Support 21 database dialect formatters
- Properly handle NULL values, empty strings, date types, etc.
- Auto-escape single quotes
- Auto-copy converted SQL to clipboard

![Downloads](img/img.png)
## Supported Database Dialects (21)

| Database | Dialect Value |
|---------|--------------|
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

## Usage

1. Copy MyBatis log from IDEA console
2. Enter `mybatis` or `mybatisLog` in uTools
3. Log will be auto-pasted and converted
4. Converted SQL is auto-copied to clipboard

## Log Format Example

```
2024-01-15 10:30:00 DEBUG [main] c.e.m.UserMapper.selectById - ==>  Preparing: SELECT * FROM user WHERE id = ? AND name = ?
2024-01-15 10:30:00 DEBUG [main] c.e.m.UserMapper.selectById - ==> Parameters: 1(Integer), 张三(String)
```

Result:
```sql
SELECT
  *
FROM
  user
WHERE
  id = 1
  AND name = '张三'
```

## Changelog

### v0.2.0
- Added 11 new database dialect support (total 21)
- Fixed NULL value parsing (was incorrectly converted to 'null' string)
- Fixed empty string parameter handling
- Fixed single quote escaping (O'Brien -> 'O''Brien')
- Improved date type parameter handling
- Improved parameter parsing, supports values containing commas
- Dropdown selector supports search filtering
- Updated sql-formatter to latest version

### v0.1.1
- Added SQL formatting to output

### v0.1.0
- Fixed parameter parsing issues with commas
- Fixed keyword matching

### v0.0.6
- Auto-convert after entering plugin
- Fixed extra spaces before parameters

### v0.0.5
- Style modifications

### v0.0.4
- String type matching

### v0.0.3
- Auto-capture value when jumping from main window to plugin
- Auto-copy to clipboard after conversion

### v0.0.2
- Fixed issue where plugin wasn't invoked after copying statement with ctrl+c

## Development

```bash
# Install dependencies
npm install

# Run tests
node test.js
```

## License

MIT
