-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 04, 2019 lúc 03:38 AM
-- Phiên bản máy phục vụ: 10.1.34-MariaDB
-- Phiên bản PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `company`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadon`
--

CREATE TABLE `hoadon` (
  `idkh` int(10) NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `tenkhach` varchar(50) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `diachi` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `sdtkh` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `sotkkh` varchar(15) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `mahd` varchar(20) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `tendv` varchar(20) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `giadv` varchar(10) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `ngaytao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ttthanhtoan` varchar(20) COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `hoadon`
--

INSERT INTO `hoadon` (`idkh`, `email`, `tenkhach`, `diachi`, `sdtkh`, `sotkkh`, `mahd`, `tendv`, `giadv`, `ngaytao`, `ttthanhtoan`) VALUES
(34, 'anhhhhh98vp@gmail.com', 'Nguyễn Văn Anh', 'ĐH Thuỷ Lợi 175 Tây Sơn Đống Đa Hà Nội Việt Nam', '0325743535', '1040 0327 9242', 'BRCGLI84E49E000Z', 'Company', '58000000', '2019-01-03 08:51:23', ''),
(35, 'toandn62@wru.vn', 'Đinh Ngọc Toàn', '175 Tây Sơn Đống Đa Hà Nội Việt Nam', '0389262320', '1040 0327 9242', 'RMLMNL72E70D685M', 'Restaurant', '1800000', '2019-01-03 08:58:51', 'Chưa thanh toán'),
(36, 'thiendd62@wru.vn', 'Đỗ Duy Thiên', '175 Tây Sơn Đống Đa Hà Nội Việt Nam', '0833 302 698', '1047 8943 8932', 'CSTMLE58C15C722T', 'eBusiness', '2.590.000', '2019-01-03 10:11:27', 'Chưa thanh toán'),
(39, 'anhhhhh98vp@gmail.com', 'Nguyễn Văn Anh', '175 Tây Sơn Đống Đa Hà Nội Việt Nam', '0325743535', '1040 0327 9242', 'RGGLRD68T15C885O', 'Company', '58.000.000', '2019-01-03 17:11:43', 'Chưa thanh toán');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `host`
--

CREATE TABLE `host` (
  `idgoi` int(10) NOT NULL,
  `tengoi` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `giahost` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bt` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `db` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uptime` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hoststatus` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `iconhost` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotro` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `host`
--

INSERT INTO `host` (`idgoi`, `tengoi`, `giahost`, `bt`, `db`, `email`, `uptime`, `hoststatus`, `iconhost`, `hotro`) VALUES
(4, 'Basic', '59.000', '15GB', '1', '5', '99%', '1', 'fa-paper-plane', 'fa-times-circle'),
(5, 'Pro', '559.000', 'Không giới hạn', 'Không giới hạn', 'Không giới hạn', '99.99%', '1', 'fa-rocket', 'fa-check-circle'),
(6, 'Medium', '359.000', '30GB', '3', '15', '99%', '1', 'fa-plane-departure', 'fa-check-circle');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `seoontop`
--

CREATE TABLE `seoontop` (
  `id` int(11) NOT NULL,
  `icongoi` varchar(20) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `tengoi` varchar(20) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `giaseo` varchar(10) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `quymo` varchar(10) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `thoigian` varchar(20) COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `seoontop`
--

INSERT INTO `seoontop` (`id`, `icongoi`, `tengoi`, `giaseo`, `quymo`, `thoigian`) VALUES
(1, 'fas fa-street-view', 'Personal', '8.000.000', 'Toàn quốc', '3 tháng'),
(2, 'fas fa-store', 'Restaurant', '18.000.000', 'Toàn quốc', '3 tháng'),
(3, 'fas fa-university', 'Company', '58.000.000', 'Toàn cầu', '6 tháng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `template`
--

CREATE TABLE `template` (
  `idtem` int(10) NOT NULL,
  `temname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cattem` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `temstatus` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `temprice` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `demotem` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `imgtem` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `template`
--

INSERT INTO `template` (`idtem`, `temname`, `cattem`, `temstatus`, `temprice`, `demotem`, `imgtem`) VALUES
(1, 'Mentor', 'Website giáo dục', '1', '1.290.000', 'https://bootstrapmade.com/demo/Mentor/', 'https://bootstrapmade.com/wp-content/themefiles/Mentor/800.png'),
(2, 'Medilab', 'Website Y tế', '1', '790.000', 'https://bootstrapmade.com/demo/Medilab/', 'https://bootstrapmade.com/wp-content/themefiles/Medilab/800.png'),
(3, 'eBusiness', 'Website Doanh nghiệp', '1', '2.590.000', 'https://bootstrapmade.com/demo/eBusiness/', 'https://bootstrapmade.com/wp-content/themefiles/eBusiness/800.png'),
(4, 'Baker', 'Bloger', '1', '590.000', 'https://bootstrapmade.com/demo/Baker/', 'https://bootstrapmade.com/wp-content/themefiles/Baker/800.png'),
(5, 'Delicious', 'Website Dịch Vụ', '1', '1.290.000', 'https://bootstrapmade.com/demo/Delicious/', 'https://bootstrapmade.com/wp-content/themefiles/Delicious/800.png'),
(6, 'Reveal', 'Quảng bá doanh nghiệp', '1', '1.590.000', 'https://bootstrapmade.com/demo/Reveal/', 'https://bootstrapmade.com/wp-content/themefiles/Reveal/800.png'),
(7, 'Multi', 'Service', '1', '1.790.000', 'https://bootstrapmade.com/demo/Multi/', 'https://bootstrapmade.com/wp-content/themefiles/Multi/400.png'),
(8, 'Butterfly', 'Admin Dashbroad', '1', '790.000', 'https://bootstrapmade.com/demo/Butterfly/', 'https://bootstrapmade.com/wp-content/themefiles/Butterfly/400.png'),
(9, 'Moderna', 'Designer', '1', '1.290.000', 'https://bootstrapmade.com/demo/Moderna/', 'https://bootstrapmade.com/wp-content/themefiles/Moderna/400.png'),
(10, 'BizPage', 'Company', '1', '2.190.000', 'https://bootstrapmade.com/demo/BizPage/', 'https://bootstrapmade.com/wp-content/themefiles/BizPage/400.png'),
(11, 'Medicio', 'Website Y tế', '1', '1.890.000', 'https://bootstrapmade.com/demo/Medicio/', 'https://bootstrapmade.com/wp-content/themefiles/Medicio/400.png'),
(12, 'Betahny', 'Cửa hàng phụ kiện', '1', '1.290.000', 'https://bootstrapmade.com/demo/Bethany/', 'https://bootstrapmade.com/wp-content/themefiles/Bethany/400.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `theloai`
--

CREATE TABLE `theloai` (
  `idtl` int(10) NOT NULL,
  `tentl` varchar(20) COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `theloai`
--

INSERT INTO `theloai` (`idtl`, `tentl`) VALUES
(1, 'SEO'),
(2, 'Hosting'),
(4, 'Template');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  ADD PRIMARY KEY (`idkh`);

--
-- Chỉ mục cho bảng `host`
--
ALTER TABLE `host`
  ADD PRIMARY KEY (`idgoi`);

--
-- Chỉ mục cho bảng `seoontop`
--
ALTER TABLE `seoontop`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `template`
--
ALTER TABLE `template`
  ADD PRIMARY KEY (`idtem`);

--
-- Chỉ mục cho bảng `theloai`
--
ALTER TABLE `theloai`
  ADD PRIMARY KEY (`idtl`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  MODIFY `idkh` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT cho bảng `host`
--
ALTER TABLE `host`
  MODIFY `idgoi` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `seoontop`
--
ALTER TABLE `seoontop`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `template`
--
ALTER TABLE `template`
  MODIFY `idtem` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `theloai`
--
ALTER TABLE `theloai`
  MODIFY `idtl` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
