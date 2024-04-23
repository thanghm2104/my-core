Determining workspace structure

Deciding which workspace information to collect

Gathering workspace info

Dưới đây là hướng dẫn cơ bản về cách cài đặt, cấu hình và chạy dự án này:

## Cài đặt

1. Clone kho lưu trữ về máy của bạn.
2. Di chuyển đến thư mục dự án.
3. Cài đặt các phụ thuộc của dự án bằng cách chạy lệnh sau trong terminal của bạn:

```sh
npm install
```

## Cấu hình

1. Cấu hình của dự án được đặt tại file [`next.config.js`](command:_github.copilot.openSymbolInFile?%5B%22next.config.js%22%2C%22next.config.js%22%5D "next.config.js"). Tại đây, bạn có thể chỉnh sửa cấu hình cơ sở dữ liệu và URL API dựa trên môi trường của bạn.
2. Đối với cấu hình cơ sở dữ liệu, bạn có thể chỉnh sửa đối tượng [`dbConfig`](command:_github.copilot.openSymbolInFile?%5B%22next.config.js%22%2C%22dbConfig%22%5D "next.config.js") trong phần [`serverRuntimeConfig`](command:_github.copilot.openSymbolInFile?%5B%22next.config.js%22%2C%22serverRuntimeConfig%22%5D "next.config.js"). Điều này bao gồm các trường [`host`](command:_github.copilot.openSymbolInFile?%5B%22next.config.js%22%2C%22host%22%5D "next.config.js"), [`port`](command:_github.copilot.openSymbolInFile?%5B%22next.config.js%22%2C%22port%22%5D "next.config.js"), [`user`](command:_github.copilot.openSymbolInFile?%5B%22next.config.js%22%2C%22user%22%5D "next.config.js"), [`password`](command:_github.copilot.openSymbolInFile?%5B%22next.config.js%22%2C%22password%22%5D "next.config.js"), và [`database`](command:_github.copilot.openSymbolInFile?%5B%22next.config.js%22%2C%22database%22%5D "next.config.js").
3. Đối với URL API, bạn có thể chỉnh sửa trường [`apiUrl`](command:_github.copilot.openSymbolInFile?%5B%22next.config.js%22%2C%22apiUrl%22%5D "next.config.js") trong phần [`publicRuntimeConfig`](command:_github.copilot.openSymbolInFile?%5B%22next.config.js%22%2C%22publicRuntimeConfig%22%5D "next.config.js"). URL thay đổi dựa trên biến môi trường `NODE_ENV`. Nếu nó là `development`, nó sẽ sử dụng URL API phát triển, ngược lại, nó sẽ sử dụng URL API sản xuất.

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

Lưu ý rằng bạn cần có Node.js và npm được cài đặt trên máy của bạn để chạy các lệnh này. Ngoài ra, hãy đảm bảo rằng bạn đã thiết lập cơ sở dữ liệu của mình theo cấu hình trong file [`next.config.js`](command:_github.copilot.openSymbolInFile?%5B%22next.config.js%22%2C%22next.config.js%22%5D "next.config.js").
