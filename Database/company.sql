-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 20, 2018 lúc 03:46 PM
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
-- Cấu trúc bảng cho bảng `contactlink`
--

CREATE TABLE `contactlink` (
  `linkfb` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `linktw` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `linkgg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `linkcp` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  `hoststatus` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `host`
--

INSERT INTO `host` (`idgoi`, `tengoi`, `giahost`, `bt`, `db`, `email`, `uptime`, `hoststatus`) VALUES
(1, 'Cá nhân', '300000', '20GB', '1', '5', '95%', '1'),
(2, 'Doanh Nghi', '859000', 'Không giới hạn', 'Không giới hạn', 'Không giới hạn', '99.99%', '1'),
(3, 'Cửa hàng', '559000', ' 50GB', '5', '10', '95%', '1'),
(4, 'Basic', '59000', '15GB', '1', '5', '90%', '1'),
(5, 'Pro', '959000', 'Không giới hạn', 'Không giới hạn', 'Không giới hạn', '99.99%', '1'),
(6, 'Medium', '359000', '30GB', '3', '15', '95%', '1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhang`
--

CREATE TABLE `khachhang` (
  `tenkh` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sdt` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sotk` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `diachikh` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vercode` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idkhach` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `slide`
--

CREATE TABLE `slide` (
  `idslide` int(10) NOT NULL,
  `tieudesl` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `noidung` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `linksl` int(200) NOT NULL,
  `trangthai` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `talkabout`
--

CREATE TABLE `talkabout` (
  `idtalk` int(10) NOT NULL,
  `talkimg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `talkvitri` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `talkct` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `talknd` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `talkstatus` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `team`
--

CREATE TABLE `team` (
  `idnv` int(10) NOT NULL,
  `tennv` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bophan` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mota` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `linkanh` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `linkfb` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `linktw` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `linkin` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `linkgg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trangthai` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `host`
--
ALTER TABLE `host`
  ADD PRIMARY KEY (`idgoi`);

--
-- Chỉ mục cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`idkhach`);

--
-- Chỉ mục cho bảng `slide`
--
ALTER TABLE `slide`
  ADD PRIMARY KEY (`idslide`);

--
-- Chỉ mục cho bảng `talkabout`
--
ALTER TABLE `talkabout`
  ADD PRIMARY KEY (`idtalk`);

--
-- Chỉ mục cho bảng `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`idnv`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `host`
--
ALTER TABLE `host`
  MODIFY `idgoi` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  MODIFY `idkhach` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `slide`
--
ALTER TABLE `slide`
  MODIFY `idslide` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `talkabout`
--
ALTER TABLE `talkabout`
  MODIFY `idtalk` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `team`
--
ALTER TABLE `team`
  MODIFY `idnv` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
