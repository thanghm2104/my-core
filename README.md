````markdown
## Cấu trúc workspace

Quyết định thông tin workspace cần thu thập

Thu thập thông tin workspace

Dưới đây là hướng dẫn chi tiết về cách cài đặt, cấu hình và chạy dự án này:

## Cài đặt

1. Clone repository về máy của bạn.
2. Di chuyển đến thư mục dự án.
3. Cài đặt các gói phụ thuộc của dự án bằng cách chạy lệnh sau trong terminal của bạn:

```sh
npm install
```
````

## Cấu hình

1. Cấu hình của dự án được đặt tại file `next.config.js`. Tại đây, bạn có thể chỉnh sửa cấu hình cơ sở dữ liệu và URL API dựa trên môi trường của bạn.
2. Đối với cấu hình cơ sở dữ liệu, bạn có thể chỉnh sửa đối tượng `dbConfig` trong phần `serverRuntimeConfig`. Điều này bao gồm các trường `host`, `port`, `user`, `password`, và `database`.
3. Đối với URL API, bạn có thể chỉnh sửa trường `apiUrl` trong phần `publicRuntimeConfig`. URL thay đổi dựa trên biến môi trường `NODE_ENV`. Nếu nó là `development`, nó sẽ sử dụng URL API phát triển, ngược lại, nó sẽ sử dụng URL API sản xuất.

## Chạy dự án

1. Để chạy dự án ở chế độ phát triển, sử dụng lệnh sau:

```sh
npm run dev
```

2. Để xây dựng dự án cho sản xuất, sử dụng lệnh sau:

```sh
npm run build
```

3. Sau khi xây dựng dự án, bạn có thể chạy nó ở chế độ sản xuất với lệnh sau:

```sh
npm run start
```

Lưu ý rằng bạn cần có Node.js và npm được cài đặt trên máy của bạn để chạy các lệnh này. Ngoài ra, hãy đảm bảo rằng bạn đã thiết lập cơ sở dữ liệu của mình theo cấu hình trong file `next.config.js`.

Để cài đặt MySQL trên Ubuntu và tạo cơ sở dữ liệu `example` với `username: admin` và `password: a12345`, bạn có thể làm theo các bước sau:

1. Mở terminal của bạn.
2. Cập nhật gói phần mềm của bạn bằng cách chạy lệnh sau:

```bash
sudo apt-get update
```

3. Cài đặt MySQL bằng cách chạy lệnh sau:

```bash
sudo apt-get install mysql-server
```

```bash
sudo service mysql start
sudo service mysql stop
```

4. Sau khi cài đặt, chạy lệnh sau để bảo mật cài đặt MySQL:

```bash
sudo mysql_secure_installation
```

5. Đăng nhập vào MySQL bằng cách sử dụng tài khoản root:

```bash
sudo mysql -u root -p
```

6. Tạo người dùng `admin` với mật khẩu `a12345`:

```sql
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'a12345';
```

7. Tạo cơ sở dữ liệu `example`:

```sql
CREATE DATABASE example;
```

8. Cấp quyền cho người dùng `admin` trên cơ sở dữ liệu `example`:

```sql
GRANT ALL PRIVILEGES ON example.* TO 'admin'@'localhost';
```

9

. Áp dụng thay đổi quyền:

```sql
FLUSH PRIVILEGES;
```

10. Thoát khỏi MySQL:

```sql
EXIT;
```

Để chạy migrations và seeders trong dự án này, bạn cần sử dụng Sequelize CLI. Dưới đây là các bước bạn có thể thực hiện:

1. Mở terminal của bạn.
2. Điều hướng đến thư mục dự án của bạn.
3. Chạy lệnh sau để thực hiện tất cả các migrations:

```bash
npx sequelize-cli db:migrate
```

Lệnh này sẽ thực thi tất cả các tệp migration trong thư mục `migrations` của bạn theo thứ tự của các dấu thời gian.

4. Sau khi tất cả các migrations đã được thực hiện, bạn có thể chạy tất cả các seeders bằng cách sử dụng lệnh sau:

```bash
npx sequelize-cli db:seed:all
```

Lệnh này sẽ thực thi tất cả các tệp seed trong thư mục `seeders` của bạn theo thứ tự của các dấu thời gian.

Lưu ý rằng bạn cần cấu hình kết nối cơ sở dữ liệu của bạn trong file `config/config.json` (hoặc `config.js` hoặc `config.json`) trước khi chạy các lệnh này.

```

```
