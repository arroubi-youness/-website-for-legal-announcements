-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 09 oct. 2024 à 17:11
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `annonces_legales`
--

-- --------------------------------------------------------

--
-- Structure de la table `annonce`
--

CREATE TABLE `annonce` (
  `id_announce` int(11) NOT NULL,
  `id_societe` int(11) NOT NULL,
  `id_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `annonce`
--

INSERT INTO `annonce` (`id_announce`, `id_societe`, `id_type`) VALUES
(4, 68, 1),
(5, 69, 1),
(6, 70, 1),
(7, 71, 1),
(8, 72, 1),
(9, 73, 1),
(10, 74, 1),
(11, 75, 1),
(12, 76, 1),
(13, 77, 1),
(14, 78, 1),
(15, 79, 1),
(16, 80, 1),
(17, 81, 1);

-- --------------------------------------------------------

--
-- Structure de la table `annonces_legales`
--

CREATE TABLE `annonces_legales` (
  `id` int(11) NOT NULL,
  `annonce_legale` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `annonces_legales`
--

INSERT INTO `annonces_legales` (`id`, `annonce_legale`) VALUES
(1, 'Constitution de société SARL SARLAU SNC SCS SCA'),
(2, 'Constitution de société SAS'),
(3, 'Constitution de société SA'),
(4, 'Constitution de société GIE'),
(5, 'Modification de société - Changement de dirigeant'),
(6, 'Modification de société - Transfert de siège social'),
(7, 'Modification de société - Changement d\'objet social'),
(8, 'Modification de société - Changement de dénomination'),
(9, 'Modification de société - Transformation de la forme sociale'),
(10, 'Modification de société - Cession de parts sociales'),
(11, 'Modification de société - Réduction de capital'),
(12, 'Modification de société - Augmentation de capital'),
(13, 'Cessation de société - Dissolution'),
(14, 'Cessation de société - Clôture de la liquidation'),
(15, 'Cessation de société - Continuité de l\'activité');

-- --------------------------------------------------------

--
-- Structure de la table `associe`
--

CREATE TABLE `associe` (
  `id_associe` int(11) NOT NULL,
  `Type` int(11) DEFAULT NULL,
  `Civilité` int(11) DEFAULT NULL,
  `Nom` varchar(50) DEFAULT NULL,
  `Prénom` varchar(50) DEFAULT NULL,
  `Adresse` varchar(100) DEFAULT NULL,
  `Code_Postal` varchar(10) DEFAULT NULL,
  `Ville` int(11) DEFAULT NULL,
  `Participation` varchar(20) DEFAULT NULL,
  `Dénomination` varchar(50) DEFAULT NULL,
  `RC` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `associe`
--

INSERT INTO `associe` (`id_associe`, `Type`, `Civilité`, `Nom`, `Prénom`, `Adresse`, `Code_Postal`, `Ville`, `Participation`, `Dénomination`, `RC`) VALUES
(21, 1, 1, 'karim', 'karim', 'meknes', '32434', 11, '3223', '', ''),
(22, 1, 1, 'karim', 'karim', 'meknes', '32434', 11, '3223', '', ''),
(23, 1, 1, 'karim', 'karim', 'meknes', '32434', 11, '3223', '', ''),
(24, 1, 1, 'karim', 'karim', 'meknes', '32434', 1, '3223', '', ''),
(25, 1, 1, 'karim', 'karim', 'meknes', '32434', 1, '3223', '', ''),
(26, 1, 1, 'karim', 'karim', 'meknes', '32434', 1, '3223', '', ''),
(27, 1, 1, 'karim', 'karim', 'meknes', '32434', 1, '3223', '', ''),
(28, 1, 1, 'ahmed', 'ahmed', 'errachidia', '234534', 18, '453345', '', ''),
(29, 1, 1, 'ahmed', 'ahmed', 'errachidia', '234534', 18, '453345', '', ''),
(30, 1, 1, 'ahmed', 'ahmed', 'errachidia', '234534', 18, '453345', '', ''),
(31, 1, 1, 'ahmed', 'ahmed', 'errachidia', '234534', 18, '453345', '', ''),
(32, 1, 1, 'ahmed', 'ahmed', 'errachidia', '234534', 1, '453345', '', ''),
(33, 1, 1, 'ahmed', 'ahmed', 'errachidia', '234534', 1, '453345', '', ''),
(34, 1, 1, 'ahmed', 'ahmed', 'errachidia', '234534', 1, '453345', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `associe_company`
--

CREATE TABLE `associe_company` (
  `id_associe_etrange` int(11) NOT NULL,
  `id_societe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `associe_company`
--

INSERT INTO `associe_company` (`id_associe_etrange`, `id_societe`) VALUES
(21, 68),
(22, 69),
(23, 70),
(24, 71),
(25, 72),
(26, 73),
(27, 74),
(28, 75),
(29, 76),
(30, 77),
(31, 78),
(32, 79),
(33, 80),
(34, 81);

-- --------------------------------------------------------

--
-- Structure de la table `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `ville_fr` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `cities`
--

INSERT INTO `cities` (`id`, `ville_fr`) VALUES
(1, 'Aïn Harrouda'),
(2, 'Ben Yakhlef'),
(3, 'Bouskoura'),
(4, 'Casablanca'),
(5, 'Médiouna'),
(6, 'Mohammadia'),
(7, 'Tit Mellil'),
(8, 'Bejaâd'),
(9, 'Ben Ahmed'),
(10, 'Benslimane'),
(11, 'Berrechid'),
(12, 'Boujniba'),
(13, 'Boulanouare'),
(14, 'Bouznika'),
(15, 'Deroua'),
(16, 'El Borouj'),
(17, 'El Gara'),
(18, 'Guisser'),
(19, 'Hattane'),
(20, 'Khouribga'),
(21, 'Loulad'),
(22, 'Oued Zem'),
(23, 'Oulad Abbou'),
(24, 'Oulad H\'Riz Sahel'),
(25, 'Oulad M\'rah'),
(26, 'Oulad Saïd'),
(27, 'Oulad Sidi Ben Daoud'),
(28, 'Ras El Ain'),
(29, 'Settat'),
(30, 'Sidi Rahhal Chataï'),
(31, 'Soualem'),
(32, 'Azemmour'),
(33, 'Bir Jdid'),
(34, 'Bouguedra'),
(35, 'Echemmaia'),
(36, 'El Jadida'),
(37, 'Hrara'),
(38, 'Ighoud'),
(39, 'Jamâat Shaim'),
(40, 'Jorf Lasfar'),
(41, 'Khemis Zemamra'),
(42, 'Laaounate'),
(43, 'Moulay Abdallah'),
(44, 'Oualidia'),
(45, 'Oulad Amrane'),
(46, 'Oulad Frej'),
(47, 'Oulad Ghadbane'),
(48, 'Safi'),
(49, 'Sebt El Maârif'),
(50, 'Sebt Gzoula'),
(51, 'Sidi Ahmed'),
(52, 'Sidi Ali Ban Hamdouche'),
(53, 'Sidi Bennour'),
(54, 'Sidi Bouzid'),
(55, 'Sidi Smaïl'),
(56, 'Youssoufia'),
(57, 'Fès'),
(58, 'Aïn Cheggag'),
(59, 'Bhalil'),
(60, 'Boulemane'),
(61, 'El Menzel'),
(62, 'Guigou'),
(63, 'Imouzzer Kandar'),
(64, 'Imouzzer Marmoucha'),
(65, 'Missour'),
(66, 'Moulay Yaâcoub'),
(67, 'Ouled Tayeb'),
(68, 'Outat El Haj'),
(69, 'Ribate El Kheir'),
(70, 'Séfrou'),
(71, 'Skhinate'),
(72, 'Tafajight'),
(73, 'Arbaoua'),
(74, 'Aïn Dorij'),
(75, 'Dar Gueddari'),
(76, 'Had Kourt'),
(77, 'Jorf El Melha'),
(78, 'Kénitra'),
(79, 'Khenichet'),
(80, 'Lalla Mimouna'),
(81, 'Mechra Bel Ksiri'),
(82, 'Mehdia'),
(83, 'Moulay Bousselham'),
(84, 'Sidi Allal Tazi'),
(85, 'Sidi Kacem'),
(86, 'Sidi Slimane'),
(87, 'Sidi Taibi'),
(88, 'Sidi Yahya El Gharb'),
(89, 'Souk El Arbaa'),
(90, 'Akka'),
(91, 'Assa'),
(92, 'Bouizakarne'),
(93, 'El Ouatia'),
(94, 'Es-Semara'),
(95, 'Fam El Hisn'),
(96, 'Foum Zguid'),
(97, 'Guelmim'),
(98, 'Taghjijt'),
(99, 'Tan-Tan'),
(100, 'Tata'),
(101, 'Zag'),
(102, 'Marrakech'),
(103, 'Ait Daoud'),
(104, 'Amizmiz'),
(105, 'Assahrij'),
(106, 'Aït Ourir'),
(107, 'Ben Guerir'),
(108, 'Chichaoua'),
(109, 'El Hanchane'),
(110, 'El Kelaâ des Sraghna'),
(111, 'Essaouira'),
(112, 'Fraïta'),
(113, 'Ghmate'),
(114, 'Ighounane'),
(115, 'Imintanoute'),
(116, 'Kattara'),
(117, 'Lalla Takerkoust'),
(118, 'Loudaya'),
(119, 'Lâattaouia'),
(120, 'Moulay Brahim'),
(121, 'Mzouda'),
(122, 'Ounagha'),
(123, 'Sid L\'Mokhtar'),
(124, 'Sid Zouin'),
(125, 'Sidi Abdallah Ghiat'),
(126, 'Sidi Bou Othmane'),
(127, 'Sidi Rahhal'),
(128, 'Skhour Rehamna'),
(129, 'Smimou'),
(130, 'Tafetachte'),
(131, 'Tahannaout'),
(132, 'Talmest'),
(133, 'Tamallalt'),
(134, 'Tamanar'),
(135, 'Tamansourt'),
(136, 'Tameslouht'),
(137, 'Tanalt'),
(138, 'Meknès'),
(139, 'Khénifra'),
(140, 'Agourai'),
(141, 'Ain Taoujdate'),
(142, 'MyAliCherif'),
(143, 'Rissani'),
(144, 'Amalou Ighriben'),
(145, 'Aoufous'),
(146, 'Arfoud'),
(147, 'Azrou'),
(148, 'Ain Jemaa'),
(149, 'Ain Karma'),
(150, 'Ain Leuh'),
(151, 'Aït Boubidmane'),
(152, 'Aït Ishaq'),
(153, 'Boudnib'),
(154, 'Boufakrane'),
(155, 'Boumia'),
(156, 'El Hajeb'),
(157, 'Elkbab'),
(158, 'Er-Rich'),
(159, 'Errachidia'),
(160, 'Gardmit'),
(161, 'Goulmima'),
(162, 'Gourrama'),
(163, 'Had Bouhssoussen'),
(164, 'El Haj Kaddour'),
(165, 'Ifrane'),
(166, 'Itzer'),
(167, 'Jorf'),
(168, 'Kehf Nsour'),
(169, 'Kerrouchen'),
(170, 'M\'haya'),
(171, 'M\'rirt'),
(172, 'Midelt'),
(173, 'Moulay Ali Cherif'),
(174, 'Moulay Bouazza'),
(175, 'Moulay Idriss Zerhoun'),
(176, 'Moussaoua'),
(177, 'N\'Zalat Bni Amar'),
(178, 'Ouaoumana'),
(179, 'Oued Ifrane'),
(180, 'Sabaa Aiyoun'),
(181, 'Sebt Jahjouh'),
(182, 'Sidi Addi'),
(183, 'Tichoute'),
(184, 'Tighassaline'),
(185, 'Tighza'),
(186, 'Timahdite'),
(187, 'Tinejdad'),
(188, 'Tizguite'),
(189, 'Toulal'),
(190, 'Tounfite'),
(191, 'Zaouia d\'Ifrane'),
(192, 'Zaïda'),
(193, 'Ahfir'),
(194, 'Aklim'),
(195, 'Al Aroui'),
(196, 'Aïn Bni Mathar'),
(197, 'Aïn Erreggada'),
(198, 'Ben Taïeb'),
(199, 'Berkane'),
(200, 'Bni Ansar'),
(201, 'Bni Chiker'),
(202, 'Bni Drar'),
(203, 'Bni Tadjite'),
(204, 'Bouanane'),
(205, 'Bouarfa'),
(206, 'Bouhdila'),
(207, 'Dar El Kebdani'),
(208, 'Debdou'),
(209, 'Douar Kannine'),
(210, 'Driouch'),
(211, 'El Aioun Sidi Mellouk'),
(212, 'Farkhana'),
(213, 'Figuig'),
(214, 'Ihddaden'),
(215, 'Jaâdar'),
(216, 'Jerada'),
(217, 'Kariat Arekmane'),
(218, 'Kassita'),
(219, 'Kerouna'),
(220, 'Laâtamna'),
(221, 'Madagh'),
(222, 'Midar'),
(223, 'Nador'),
(224, 'Naima'),
(225, 'Oued Heimer'),
(226, 'Oujda'),
(227, 'Ras El Ma'),
(228, 'Saïdia'),
(229, 'Selouane'),
(230, 'Sidi Boubker'),
(231, 'Sidi Slimane Echcharraa'),
(232, 'Talsint'),
(233, 'Taourirt'),
(234, 'Tendrara'),
(235, 'Tiztoutine'),
(236, 'Touima'),
(237, 'Touissit'),
(238, 'Zaïo'),
(239, 'Zeghanghane'),
(240, 'Rabat'),
(241, 'Salé'),
(242, 'Ain El Aouda'),
(243, 'Harhoura'),
(244, 'Khémisset'),
(245, 'Oulmès'),
(246, 'Rommani'),
(247, 'Sidi Allal El Bahraoui'),
(248, 'Sidi Bouknadel'),
(249, 'Skhirate'),
(250, 'Tamesna'),
(251, 'Témara'),
(252, 'Tiddas'),
(253, 'Tiflet'),
(254, 'Touarga'),
(255, 'Agadir'),
(256, 'Agdz'),
(257, 'Agni Izimmer'),
(258, 'Aït Melloul'),
(259, 'Alnif'),
(260, 'Anzi'),
(261, 'Aoulouz'),
(262, 'Aourir'),
(263, 'Arazane'),
(264, 'Aït Baha'),
(265, 'Aït Iaâza'),
(266, 'Aït Yalla'),
(267, 'Ben Sergao'),
(268, 'Biougra'),
(269, 'Boumalne-Dadès'),
(270, 'Dcheira El Jihadia'),
(271, 'Drargua'),
(272, 'El Guerdane'),
(273, 'Harte Lyamine'),
(274, 'Ida Ougnidif'),
(275, 'Ifri'),
(276, 'Igdamen'),
(277, 'Ighil n\'Oumgoun'),
(278, 'Imassine'),
(279, 'Inezgane'),
(280, 'Irherm'),
(281, 'Kelaat-M\'Gouna'),
(282, 'Lakhsas'),
(283, 'Lakhsass'),
(284, 'Lqliâa'),
(285, 'M\'semrir'),
(286, 'Massa (Maroc)'),
(287, 'Megousse'),
(288, 'Ouarzazate'),
(289, 'Oulad Berhil'),
(290, 'Oulad Teïma'),
(291, 'Sarghine'),
(292, 'Sidi Ifni'),
(293, 'Skoura'),
(294, 'Tabounte'),
(295, 'Tafraout'),
(296, 'Taghzout'),
(297, 'Tagzen'),
(298, 'Tali ouine'),
(299, 'Tamegroute'),
(300, 'Tamraght'),
(301, 'Tanoumrite Nkob Zagora'),
(302, 'Taourirt ait zaghar'),
(303, 'Taroudannt'),
(304, 'Temsia'),
(305, 'Tifnit'),
(306, 'Tisgdal'),
(307, 'Tiznit'),
(308, 'Toundoute'),
(309, 'Zagora'),
(310, 'Afourar'),
(311, 'Aghbala'),
(312, 'Azilal'),
(313, 'Aït Majden'),
(314, 'Beni Ayat'),
(315, 'Béni Mellal'),
(316, 'Bin elouidane'),
(317, 'Bradia'),
(318, 'Bzou'),
(319, 'Dar Oulad Zidouh'),
(320, 'Demnate'),
(321, 'Dra\'a'),
(322, 'El Ksiba'),
(323, 'Foum Jamaa'),
(324, 'Fquih Ben Salah'),
(325, 'Kasba Tadla'),
(326, 'Ouaouizeght'),
(327, 'Oulad Ayad'),
(328, 'Oulad M\'Barek'),
(329, 'Oulad Yaich'),
(330, 'Sidi Jaber'),
(331, 'Souk Sebt Oulad Nemma'),
(332, 'Zaouïat Cheikh'),
(333, 'Tanger'),
(334, 'Tétouan'),
(335, 'Akchour'),
(336, 'Assilah'),
(337, 'Bab Berred'),
(338, 'Bab Taza'),
(339, 'Brikcha'),
(340, 'Chefchaouen'),
(341, 'Dar Bni Karrich'),
(342, 'Dar Chaoui'),
(343, 'Fnideq'),
(344, 'Gueznaia'),
(345, 'Jebha'),
(346, 'Khémis Sahel'),
(347, 'Ksar El Kébir'),
(348, 'Larache'),
(349, 'M\'diq'),
(350, 'Martil'),
(351, 'Moqrisset'),
(352, 'Oued Laou'),
(353, 'Oued Rmel'),
(354, 'Ouazzane'),
(355, 'Point Cires'),
(356, 'Sidi Lyamani'),
(357, 'Sidi Mohamed ben Abdallah el-Raisuni'),
(358, 'Zinat'),
(359, 'Ajdir'),
(360, 'Aknoul'),
(361, 'Al Hoceïma'),
(362, 'Aït Hichem'),
(363, 'Bni Bouayach'),
(364, 'Bni Hadifa'),
(365, 'Ghafsai'),
(366, 'Guercif'),
(367, 'Imzouren'),
(368, 'Inahnahen'),
(369, 'Issaguen (Ketama)'),
(370, 'Karia (El Jadida)'),
(371, 'Karia Ba Mohamed'),
(372, 'Oued Amlil'),
(373, 'Oulad Zbair'),
(374, 'Tahla'),
(375, 'Tala Tazegwaght'),
(376, 'Tamassint'),
(377, 'Taounate'),
(378, 'Targuist'),
(379, 'Taza'),
(380, 'Taïnaste'),
(381, 'Thar Es-Souk'),
(382, 'Tissa'),
(383, 'Tizi Ouasli'),
(384, 'Laayoune'),
(385, 'El Marsa'),
(386, 'Tarfaya'),
(387, 'Boujdour'),
(388, 'Awsard'),
(389, 'Oued-Eddahab'),
(390, 'Stehat'),
(391, 'Aït Attab');

-- --------------------------------------------------------

--
-- Structure de la table `commaisiare_company`
--

CREATE TABLE `commaisiare_company` (
  `id_commaissaire_etrange` int(11) NOT NULL,
  `id_societe_etrange` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `commissaire`
--

CREATE TABLE `commissaire` (
  `id_com` int(11) NOT NULL,
  `Type` int(11) DEFAULT NULL,
  `Dénomination` varchar(50) DEFAULT NULL,
  `Adresse` varchar(100) DEFAULT NULL,
  `Code_Postal` varchar(10) DEFAULT NULL,
  `Ville` int(11) DEFAULT NULL,
  `Civilité` int(11) DEFAULT NULL,
  `Nom` varchar(50) DEFAULT NULL,
  `Prénom` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `company`
--

CREATE TABLE `company` (
  `id_company` int(11) NOT NULL,
  `Denomination` varchar(255) NOT NULL,
  `Sigle` varchar(50) DEFAULT NULL,
  `Forme_sociale` int(50) DEFAULT NULL,
  `Objet_social` text DEFAULT NULL,
  `Capital_DH` decimal(10,2) DEFAULT NULL,
  `Valeur_nominale_DH` decimal(10,2) DEFAULT NULL,
  `Montant_des_apports_en_numéraire_DH` decimal(10,2) DEFAULT NULL,
  `Description_des_apports_en_nature_et_leurs_valeurs` text DEFAULT NULL,
  `Durée_ANS` int(11) DEFAULT NULL,
  `id_acte_etran` int(11) DEFAULT NULL,
  `id_siege` int(11) DEFAULT NULL,
  `depot_id` int(11) DEFAULT NULL,
  `stipulation_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `company`
--

INSERT INTO `company` (`id_company`, `Denomination`, `Sigle`, `Forme_sociale`, `Objet_social`, `Capital_DH`, `Valeur_nominale_DH`, `Montant_des_apports_en_numéraire_DH`, `Description_des_apports_en_nature_et_leurs_valeurs`, `Durée_ANS`, `id_acte_etran`, `id_siege`, `depot_id`, `stipulation_id`) VALUES
(68, 'les volcans', 'alterne', 1, 'qwer', 123456.00, 12345.00, 2345.00, 'sdf', 1234, 91, 86, 84, 1),
(69, 'les volcans', 'alterne', 1, 'qwer', 123456.00, 12345.00, 2345.00, 'sdf', 1234, 92, 87, 85, 1),
(70, 'les volcans', 'alterne', 1, 'qwer', 123456.00, 12345.00, 2345.00, 'sdf', 1234, 93, 88, 86, 1),
(71, 'les volcans', 'alterne', 1, 'qwer', 123456.00, 12345.00, 2345.00, 'sdf', 1234, 94, 89, 87, 1),
(72, 'les volcans', 'alterne', 1, 'qwer', 123456.00, 12345.00, 2345.00, 'sdf', 1234, 95, 90, 88, 1),
(73, 'les volcans', 'alterne', 1, 'qwer', 123456.00, 12345.00, 2345.00, 'sdf', 1234, 96, 91, 89, 1),
(74, 'les volcans', 'alterne', 1, 'qwer', 123456.00, 12345.00, 2345.00, 'sdf', 1234, 97, 92, 90, 1),
(75, 'wehelp', 'alterne', 2, 'wehelp is  a    agence ', 2334.00, 34434.00, 34.00, '4343', 34, 98, 93, 91, 1),
(76, 'wehelp', 'alterne', 2, 'wehelp is  a    agence ', 2334.00, 34434.00, 34.00, '4343', 34, 99, 94, 92, 1),
(77, 'wehelp', 'alterne', 2, 'wehelp is  a    agence ', 2334.00, 34434.00, 34.00, '4343', 34, 100, 95, 93, 1),
(78, 'wehelp', 'alterne', 2, 'wehelp is  a    agence ', 2334.00, 34434.00, 34.00, '4343', 34, 101, 96, 94, 1),
(79, 'wehelp', 'alterne', 2, 'wehelp is  a    agence ', 2334.00, 34434.00, 34.00, '4343', 34, 102, 97, 95, 1),
(80, 'wehelp', 'alterne', 2, 'wehelp is  a    agence ', 2334.00, 34434.00, 34.00, '4343', 34, 103, 98, 96, 1),
(81, 'wehelp', 'alterne', 2, 'wehelp is  a    agence ', 2334.00, 34434.00, 34.00, '4343', 34, 104, 99, 97, 1);

-- --------------------------------------------------------

--
-- Structure de la table `depot_legal`
--

CREATE TABLE `depot_legal` (
  `id_depot` int(11) NOT NULL,
  `Tribunal` int(11) DEFAULT NULL,
  `Date_de_dépôt` date DEFAULT NULL,
  `Numéro_de_dépôt` varchar(20) DEFAULT NULL,
  `Numéro_de_RC` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `depot_legal`
--

INSERT INTO `depot_legal` (`id_depot`, `Tribunal`, `Date_de_dépôt`, `Numéro_de_dépôt`, `Numéro_de_RC`) VALUES
(83, 6, '2024-02-12', '2323', '243'),
(84, 6, '2024-02-12', '2323', '243'),
(85, 6, '2024-02-12', '2323', '243'),
(86, 6, '2024-02-12', '2323', '243'),
(87, 6, '2024-02-12', '2323', '243'),
(88, 6, '2024-02-12', '2323', '243'),
(89, 6, '2024-02-12', '2323', '243'),
(90, 6, '2024-02-12', '2323', '243'),
(91, 1, '2025-04-03', '34', '34'),
(92, 1, '2025-04-03', '34', '34'),
(93, 1, '2025-04-03', '34', '34'),
(94, 1, '2025-04-03', '34', '34'),
(95, 1, '2025-04-03', '34', '34'),
(96, 1, '2025-04-03', '34', '34'),
(97, 1, '2025-04-03', '34', '34');

-- --------------------------------------------------------

--
-- Structure de la table `forms_juridiques`
--

CREATE TABLE `forms_juridiques` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `forms_juridiques`
--

INSERT INTO `forms_juridiques` (`id`, `name`) VALUES
(1, 'Société à Responsabilité Limitée (SARL)'),
(2, 'Société à Responsabilité Limitée à Associé Unique (SARLAU)'),
(3, 'Société en Commandite Simple (SCS)'),
(4, 'Société en Commandite par Action (SCA)'),
(5, 'Société en Nom Collectif (SNC)'),
(6, 'Société Anonyme Simplifiée (SAS)'),
(7, 'Société Anonyme (SA)'),
(8, 'Groupement d\'Intérêt Economique (GIE)'),
(10, 'Société Civile (SC)'),
(11, 'Société Civile Immobilière (SCI)'),
(12, 'Société Civile Professionnelle (SCP)'),
(14, 'Société de Participation (SP)'),
(15, 'Société d\'Investissement à Capital Variable (SICAV)'),
(16, 'Fonds Commun de Placement (FCP)'),
(19, 'Succursale (SUCC)'),
(20, 'Agence (AGENCE)'),
(21, 'Entreprise Individuel (PP)'),
(22, 'Coopérative (COOP)'),
(23, 'Entreprise Public (PUBLIC)'),
(24, 'Office (OFFICE)'),
(25, 'Autre Forme Juridique (AUTRE)'),
(26, 'Société par Action (SPA)'),
(27, 'Groupement (GRP)'),
(28, 'Société Unipersonnelle à Responsabilité Limité (SUARL)'),
(29, 'Entreprise Public Economique (EPE)'),
(30, 'Entreprise Public Industrielle Et Commerciale (EPIC)'),
(31, 'Entreprise Publique Locale (EPL)'),
(32, 'Entreprise Unipersonnelle Sportive à Responsabilite Limitee (EUSRL)'),
(33, 'Representation Commercial (RCOM)'),
(34, 'Societe Sportive à Responsabilite Limite (SRL)'),
(35, 'Societe Sportive Par Actions (SSPA)'),
(36, 'Société Mutuelle de Services Agricoles (SMSA)'),
(37, 'Établissement Public à caractère Non Administratif (EPNA)'),
(38, 'Groupement d\'Intérêt Economique Commercial (GIECOM)'),
(39, 'Groupement d\'Intérêt Economique Civil (GIECIV)'),
(40, 'Société Professionnelle (SPROF)'),
(41, 'Société Civile Non Commerciale (SCNC)'),
(42, 'Société à Capital Variable (SCV)'),
(43, 'Société de Personnes (SPERSO)'),
(44, 'Centre d’Affaire (CA)'),
(45, 'Nom Regroupé (NR)'),
(46, 'Société de Fait (SF)'),
(47, 'Établissement Stable (ES)'),
(48, 'Indéterminée (INDETERMIN)'),
(49, 'SOCIETE PAR ACTIONS SIMPLIFIEE D\'ASSOCIE UNIQUE (SASAU)'),
(50, 'SOCIETE PAR ACTIONS SIMPLIFIEE (SPAS)'),
(51, 'SOCIETE CITOYENNE LOCALE (SCL)'),
(52, 'Fonds de placement collectif en capital (FPCC)'),
(53, 'Société d\'assurance mutuelle (SAM)'),
(54, 'Mutuelle (MUT)'),
(100, 'Société Anonyme à Directoire (SAD)'),
(101, 'Société Anonyme à Conseil (SAC)');

-- --------------------------------------------------------

--
-- Structure de la table `membre`
--

CREATE TABLE `membre` (
  `id_membre` int(11) NOT NULL,
  `Type` varchar(20) DEFAULT NULL,
  `Dénomination` varchar(50) DEFAULT NULL,
  `RC` varchar(20) DEFAULT NULL,
  `Adresse` varchar(100) DEFAULT NULL,
  `Code_Postal` varchar(10) DEFAULT NULL,
  `Ville` varchar(50) DEFAULT NULL,
  `Nombre_de_Parts_Libérées` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `membre_company`
--

CREATE TABLE `membre_company` (
  `id_membre` int(11) NOT NULL,
  `id_comany` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `membre_organe`
--

CREATE TABLE `membre_organe` (
  `id` int(11) NOT NULL,
  `Type` int(20) DEFAULT NULL,
  `Qualité` int(50) DEFAULT NULL,
  `Civilité` int(10) DEFAULT NULL,
  `Nom` varchar(50) DEFAULT NULL,
  `Prénom` varchar(50) DEFAULT NULL,
  `Adresse` varchar(100) DEFAULT NULL,
  `Code_Postal` varchar(10) DEFAULT NULL,
  `Ville` int(50) DEFAULT NULL,
  `Dénomination` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `membre_organe_company`
--

CREATE TABLE `membre_organe_company` (
  `id_membre_organe` int(11) NOT NULL,
  `id_company` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `represent`
--

CREATE TABLE `represent` (
  `id_rep` int(11) NOT NULL,
  `type` int(50) DEFAULT NULL,
  `Qualité` int(50) DEFAULT NULL,
  `Civilité` int(10) DEFAULT NULL,
  `Nom` varchar(50) DEFAULT NULL,
  `Prénom` varchar(50) DEFAULT NULL,
  `Adresse` varchar(100) DEFAULT NULL,
  `Code_Postal` varchar(10) DEFAULT NULL,
  `Ville` int(50) DEFAULT NULL,
  `denomination` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `represent`
--

INSERT INTO `represent` (`id_rep`, `type`, `Qualité`, `Civilité`, `Nom`, `Prénom`, `Adresse`, `Code_Postal`, `Ville`, `denomination`) VALUES
(99, 1, 1, 1, 'ahmed', 'ahmed', 'meknes', '32345', 14, ''),
(100, 1, 1, 1, 'ahmed', 'ahmed', 'meknes', '32345', 14, ''),
(101, 1, 1, 1, 'ahmed', 'ahmed', 'meknes', '32345', 14, ''),
(102, 1, 1, 1, 'ahmed', 'ahmed', 'meknes', '32345', 1, ''),
(103, 1, 1, 1, 'ahmed', 'ahmed', 'meknes', '32345', 1, ''),
(104, 1, 1, 1, 'ahmed', 'ahmed', 'meknes', '32345', 1, ''),
(105, 1, 1, 1, 'ahmed', 'ahmed', 'meknes', '32345', 1, ''),
(106, 1, 1, 1, 'rachid', 'rachid', 'meknes', 'hemriya', 9, ''),
(107, 1, 1, 1, 'rachid', 'rachid', 'meknes', 'hemriya', 9, ''),
(108, 1, 1, 1, 'rachid', 'rachid', 'meknes', 'hemriya', 9, ''),
(109, 1, 1, 1, 'rachid', 'rachid', 'meknes', 'hemriya', 9, ''),
(110, 1, 1, 1, 'rachid', 'rachid', 'meknes', 'hemriya', 1, ''),
(111, 1, 1, 1, 'rachid', 'rachid', 'meknes', 'hemriya', 1, ''),
(112, 1, 1, 1, 'rachid', 'rachid', 'meknes', 'hemriya', 1, '');

-- --------------------------------------------------------

--
-- Structure de la table `represent_company`
--

CREATE TABLE `represent_company` (
  `id_represent` int(11) NOT NULL,
  `id_company_etranger` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `represent_company`
--

INSERT INTO `represent_company` (`id_represent`, `id_company_etranger`) VALUES
(99, 68),
(100, 69),
(101, 70),
(102, 71),
(103, 72),
(104, 73),
(105, 74),
(106, 75),
(107, 76),
(108, 77),
(109, 78),
(110, 79),
(111, 80),
(112, 81);

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `role_name`) VALUES
(1, 'Co-gérant'),
(2, 'Gérant'),
(3, 'Directeur Général'),
(4, 'Directeur Général Délégué'),
(5, 'Président'),
(6, 'Président Directeur Général'),
(7, 'Autre'),
(8, 'Administrateur'),
(9, 'Membre du Conseil de surveillance'),
(10, 'Président du Conseil d\'administration'),
(11, 'Président du Conseil de surveillance');

-- --------------------------------------------------------

--
-- Structure de la table `siege_sociale`
--

CREATE TABLE `siege_sociale` (
  `id` int(11) NOT NULL,
  `Adresse` varchar(255) DEFAULT NULL,
  `Code_postal` varchar(10) DEFAULT NULL,
  `Ville` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `siege_sociale`
--

INSERT INTO `siege_sociale` (`id`, `Adresse`, `Code_postal`, `Ville`) VALUES
(85, 'meknes', '34556', '57'),
(86, 'meknes', '34556', '57'),
(87, 'meknes', '34556', '57'),
(88, 'meknes', '34556', '57'),
(89, 'meknes', '34556', '1'),
(90, 'meknes', '34556', '1'),
(91, 'meknes', '34556', '1'),
(92, 'meknes', '34556', '1'),
(93, 'meknes', 'hemriya', '48'),
(94, 'meknes', 'hemriya', '48'),
(95, 'meknes', 'hemriya', '48'),
(96, 'meknes', 'hemriya', '48'),
(97, 'meknes', 'hemriya', '1'),
(98, 'meknes', 'hemriya', '1'),
(99, 'meknes', 'hemriya', '1');

-- --------------------------------------------------------

--
-- Structure de la table `sipulation`
--

CREATE TABLE `sipulation` (
  `id` int(11) NOT NULL,
  `Organe_social_habilité` varchar(50) DEFAULT NULL,
  `Dispositions_statutaires` text DEFAULT NULL,
  `Avantages` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `sipulation`
--

INSERT INTO `sipulation` (`id`, `Organe_social_habilité`, `Dispositions_statutaires`, `Avantages`) VALUES
(1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `status_acte`
--

CREATE TABLE `status_acte` (
  `id_acte` int(11) NOT NULL,
  `nom_acte` text NOT NULL,
  `date_acte` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `status_acte`
--

INSERT INTO `status_acte` (`id_acte`, `nom_acte`, `date_acte`) VALUES
(90, '1', '2024-02-22'),
(91, '1', '2024-02-22'),
(92, '1', '2024-02-22'),
(93, '1', '2024-02-22'),
(94, '1', '2024-02-22'),
(95, '1', '2024-02-22'),
(96, '1', '2024-02-22'),
(97, '1', '2024-02-22'),
(98, '1', '2025-04-23'),
(99, '1', '2025-04-23'),
(100, '1', '2025-04-23'),
(101, '1', '2025-04-23'),
(102, '1', '2025-04-23'),
(103, '1', '2025-04-23'),
(104, '1', '2025-04-23');

-- --------------------------------------------------------

--
-- Structure de la table `tribunaux`
--

CREATE TABLE `tribunaux` (
  `id` int(11) NOT NULL,
  `tribunal` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `tribunaux`
--

INSERT INTO `tribunaux` (`id`, `tribunal`) VALUES
(1, 'AGADIR (Tribunal de Commerce)'),
(2, 'ALHOCEIMA (Tribunal de 1ère Instance)'),
(3, 'AZILAL (Tribunal de 1ère Instance)'),
(4, 'BEN AHMED (Tribunal de 1ère Instance)'),
(5, 'BENGUERIR (Tribunal de 1ère Instance)'),
(6, 'BENI MELLAL (Tribunal de 1ère Instance)'),
(7, 'BEN SLIMANE (Tribunal de 1ère Instance)'),
(8, 'BERKANE (Tribunal de 1ère Instance)'),
(9, 'BERRECHID (Tribunal de 1ère Instance)'),
(10, 'BOUARFA (Tribunal de 1ère Instance)'),
(11, 'BOULMANE (Tribunal de 1ère Instance)'),
(12, 'CASABLANCA (Tribunal de Commerce)'),
(13, 'CHEFCHAOUEN (Tribunal de 1ère Instance)'),
(14, 'ELJADIDA (Tribunal de 1ère Instance)'),
(15, 'ERRACHIDIA (Tribunal de 1ère Instance)'),
(16, 'ESSMARA (Tribunal de 1ère Instance)'),
(17, 'ESSAOUIRA (Tribunal de 1ère Instance)'),
(18, 'FKIH BEN SALLAH (Tribunal de 1ère Instance)'),
(19, 'FES (Tribunal de Commerce)'),
(20, 'GUELMIM (Tribunal de 1ère Instance)'),
(21, 'GUERCIF (Tribunal de 1ère Instance)'),
(22, 'IMINTANOUTE (Tribunal de 1ère Instance)'),
(23, 'INZEGANE (Tribunal de 1ère Instance)'),
(24, 'KELAA SRAGHNA (Tribunal de 1ère Instance)'),
(25, 'KENITRA (Tribunal de 1ère Instance)'),
(26, 'KHEMISSET (Tribunal de 1ère Instance)'),
(27, 'KHENIFRA (Tribunal de 1ère Instance)'),
(28, 'KHOURIBGA (Tribunal de 1ère Instance)'),
(29, 'KSAR KEBIR (Tribunal de 1ère Instance)'),
(30, 'LAAYOUNE (Tribunal de 1ère Instance)'),
(31, 'LARACHE (Tribunal de 1ère Instance)'),
(32, 'MARRAKECH (Tribunal de Commerce)'),
(33, 'MEKNES (Tribunal de Commerce)'),
(34, 'MIDELT (Tribunal de 1ère Instance)'),
(35, 'MOHAMMEDIA (Tribunal de 1ère Instance)'),
(36, 'NADOR (Tribunal de 1ère Instance)'),
(37, 'OUARZAZATE (Tribunal de 1ère Instance)'),
(38, 'OUAZZANE (Tribunal de 1ère Instance)'),
(39, 'OUED EDDAHAB (DAKHLA) (Tribunal de 1ère Instance)'),
(40, 'OUED ZEM (Tribunal de 1ère Instance)'),
(41, 'OUJDA (Tribunal de Commerce)'),
(42, 'RABAT (Tribunal de Commerce)'),
(43, 'ROMMANI (Tribunal de 1ère Instance)'),
(44, 'SAFI (Tribunal de 1ère Instance)'),
(45, 'SALE (Tribunal de 1ère Instance)'),
(46, 'SEFROU (Tribunal de 1ère Instance)'),
(47, 'SETTAT (Tribunal de 1ère Instance)'),
(48, 'SIDI BENNOUR (Tribunal de 1ère Instance)'),
(49, 'SIDI KACEM (Tribunal de 1ère Instance)'),
(50, 'SIDI SLIMANE (Tribunal de 1ère Instance)'),
(51, 'SOUK LARBAA (Tribunal de 1ère Instance)'),
(52, 'TANTAN (Tribunal de 1ère Instance)'),
(53, 'TANGER (Tribunal de Commerce)'),
(54, 'TATA (Tribunal de 1ère Instance)'),
(55, 'TAZA (Tribunal de 1ère Instance)'),
(56, 'TETOUAN (Tribunal de 1ère Instance)'),
(57, 'TIZNIT (Tribunal de 1ère Instance)'),
(58, 'TAOUNAT (Tribunal de 1ère Instance)'),
(59, 'TAROUDANT (Tribunal de 1ère Instance)'),
(60, 'YOUSSOUFIA (Tribunal de 1ère Instance)'),
(61, 'ZAGORA (Tribunal de 1ère Instance)'),
(62, 'KASBA TADLA (Tribunal de 1ère Instance)'),
(63, 'BOUJAAD (Tribunal de 1ère Instance)'),
(64, 'ASILAH (Tribunal de 1ère Instance)'),
(65, 'TAOURIRT (Tribunal de 1ère Instance)'),
(66, 'AZROU (Tribunal de 1ère Instance)'),
(67, 'MISSOUR (Tribunal de 1ère Instance)'),
(68, 'TEMARA (Tribunal de 1ère Instance)'),
(69, 'TINGHIR (Tribunal de 1ère Instance)'),
(70, 'MECHRA BEL KSIRI (Tribunal de 1ère Instance)'),
(71, 'TIFLET (Tribunal de 1ère Instance)'),
(72, 'TARGUIST (Tribunal de 1ère Instance)'),
(73, 'SOUK SEBT OULED NEMMA (Tribunal de 1ère Instance)'),
(280, 'DRIOUCH (Tribunal de 1ère Instance)'),
(292, 'SIDI IFNI (Tribunal de 1ère Instance)');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `annonce`
--
ALTER TABLE `annonce`
  ADD PRIMARY KEY (`id_announce`),
  ADD KEY `id_societe` (`id_societe`),
  ADD KEY `id_type` (`id_type`);

--
-- Index pour la table `annonces_legales`
--
ALTER TABLE `annonces_legales`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `associe`
--
ALTER TABLE `associe`
  ADD PRIMARY KEY (`id_associe`),
  ADD KEY `tk_sose` (`Ville`);

--
-- Index pour la table `associe_company`
--
ALTER TABLE `associe_company`
  ADD PRIMARY KEY (`id_associe_etrange`,`id_societe`),
  ADD KEY `id_societe` (`id_societe`);

--
-- Index pour la table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `commaisiare_company`
--
ALTER TABLE `commaisiare_company`
  ADD PRIMARY KEY (`id_commaissaire_etrange`,`id_societe_etrange`),
  ADD KEY `id_societe_etrange` (`id_societe_etrange`);

--
-- Index pour la table `commissaire`
--
ALTER TABLE `commissaire`
  ADD PRIMARY KEY (`id_com`);

--
-- Index pour la table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id_company`),
  ADD KEY `fk_id_acte` (`id_acte_etran`),
  ADD KEY `fk_id_siege` (`id_siege`),
  ADD KEY `fk_dept_id` (`depot_id`),
  ADD KEY `tk_sos` (`Forme_sociale`),
  ADD KEY `fk_company_id` (`stipulation_id`);

--
-- Index pour la table `depot_legal`
--
ALTER TABLE `depot_legal`
  ADD PRIMARY KEY (`id_depot`),
  ADD KEY `Tribunal` (`Tribunal`);

--
-- Index pour la table `forms_juridiques`
--
ALTER TABLE `forms_juridiques`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `membre`
--
ALTER TABLE `membre`
  ADD PRIMARY KEY (`id_membre`);

--
-- Index pour la table `membre_company`
--
ALTER TABLE `membre_company`
  ADD PRIMARY KEY (`id_membre`,`id_comany`),
  ADD KEY `id_comany` (`id_comany`);

--
-- Index pour la table `membre_organe`
--
ALTER TABLE `membre_organe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tk_qualite` (`Qualité`),
  ADD KEY `tk_ville` (`Ville`);

--
-- Index pour la table `membre_organe_company`
--
ALTER TABLE `membre_organe_company`
  ADD PRIMARY KEY (`id_membre_organe`,`id_company`),
  ADD KEY `id_company` (`id_company`);

--
-- Index pour la table `represent`
--
ALTER TABLE `represent`
  ADD PRIMARY KEY (`id_rep`),
  ADD KEY `fk_company_etranger` (`Ville`),
  ADD KEY `fk_child_table_parent_table` (`Qualité`);

--
-- Index pour la table `represent_company`
--
ALTER TABLE `represent_company`
  ADD PRIMARY KEY (`id_represent`,`id_company_etranger`),
  ADD KEY `id_company_etranger` (`id_company_etranger`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `siege_sociale`
--
ALTER TABLE `siege_sociale`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sipulation`
--
ALTER TABLE `sipulation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `status_acte`
--
ALTER TABLE `status_acte`
  ADD PRIMARY KEY (`id_acte`);

--
-- Index pour la table `tribunaux`
--
ALTER TABLE `tribunaux`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `annonce`
--
ALTER TABLE `annonce`
  MODIFY `id_announce` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `associe`
--
ALTER TABLE `associe`
  MODIFY `id_associe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT pour la table `commissaire`
--
ALTER TABLE `commissaire`
  MODIFY `id_com` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT pour la table `company`
--
ALTER TABLE `company`
  MODIFY `id_company` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT pour la table `depot_legal`
--
ALTER TABLE `depot_legal`
  MODIFY `id_depot` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT pour la table `forms_juridiques`
--
ALTER TABLE `forms_juridiques`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT pour la table `membre`
--
ALTER TABLE `membre`
  MODIFY `id_membre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `membre_organe`
--
ALTER TABLE `membre_organe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT pour la table `represent`
--
ALTER TABLE `represent`
  MODIFY `id_rep` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT pour la table `siege_sociale`
--
ALTER TABLE `siege_sociale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT pour la table `sipulation`
--
ALTER TABLE `sipulation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT pour la table `status_acte`
--
ALTER TABLE `status_acte`
  MODIFY `id_acte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `annonce`
--
ALTER TABLE `annonce`
  ADD CONSTRAINT `annonce_ibfk_1` FOREIGN KEY (`id_societe`) REFERENCES `company` (`id_company`),
  ADD CONSTRAINT `annonce_ibfk_2` FOREIGN KEY (`id_type`) REFERENCES `annonces_legales` (`id`);

--
-- Contraintes pour la table `associe`
--
ALTER TABLE `associe`
  ADD CONSTRAINT `tk_sose` FOREIGN KEY (`Ville`) REFERENCES `cities` (`id`);

--
-- Contraintes pour la table `associe_company`
--
ALTER TABLE `associe_company`
  ADD CONSTRAINT `associe_company_ibfk_1` FOREIGN KEY (`id_societe`) REFERENCES `company` (`id_company`),
  ADD CONSTRAINT `associe_company_ibfk_2` FOREIGN KEY (`id_associe_etrange`) REFERENCES `associe` (`id_associe`),
  ADD CONSTRAINT `constraint_name` FOREIGN KEY (`id_associe_etrange`) REFERENCES `associe` (`id_associe`);

--
-- Contraintes pour la table `commaisiare_company`
--
ALTER TABLE `commaisiare_company`
  ADD CONSTRAINT `commaisiare_company_ibfk_1` FOREIGN KEY (`id_societe_etrange`) REFERENCES `company` (`id_company`),
  ADD CONSTRAINT `commaisiare_company_ibfk_2` FOREIGN KEY (`id_commaissaire_etrange`) REFERENCES `commissaire` (`id_com`);

--
-- Contraintes pour la table `company`
--
ALTER TABLE `company`
  ADD CONSTRAINT `fk_company_id` FOREIGN KEY (`stipulation_id`) REFERENCES `sipulation` (`id`),
  ADD CONSTRAINT `fk_dept_id` FOREIGN KEY (`depot_id`) REFERENCES `depot_legal` (`id_depot`),
  ADD CONSTRAINT `fk_id_acte` FOREIGN KEY (`id_acte_etran`) REFERENCES `status_acte` (`id_acte`),
  ADD CONSTRAINT `fk_id_siege` FOREIGN KEY (`id_siege`) REFERENCES `siege_sociale` (`id`),
  ADD CONSTRAINT `tk_sos` FOREIGN KEY (`Forme_sociale`) REFERENCES `forms_juridiques` (`id`);

--
-- Contraintes pour la table `depot_legal`
--
ALTER TABLE `depot_legal`
  ADD CONSTRAINT `depot_legal_ibfk_1` FOREIGN KEY (`Tribunal`) REFERENCES `tribunaux` (`id`);

--
-- Contraintes pour la table `membre_company`
--
ALTER TABLE `membre_company`
  ADD CONSTRAINT `membre_company_ibfk_1` FOREIGN KEY (`id_membre`) REFERENCES `membre` (`id_membre`),
  ADD CONSTRAINT `membre_company_ibfk_2` FOREIGN KEY (`id_comany`) REFERENCES `company` (`id_company`);

--
-- Contraintes pour la table `membre_organe`
--
ALTER TABLE `membre_organe`
  ADD CONSTRAINT `tk_qualite` FOREIGN KEY (`Qualité`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `tk_ville` FOREIGN KEY (`Ville`) REFERENCES `cities` (`id`);

--
-- Contraintes pour la table `membre_organe_company`
--
ALTER TABLE `membre_organe_company`
  ADD CONSTRAINT `membre_organe_company_ibfk_1` FOREIGN KEY (`id_membre_organe`) REFERENCES `membre_organe` (`id`),
  ADD CONSTRAINT `membre_organe_company_ibfk_2` FOREIGN KEY (`id_company`) REFERENCES `company` (`id_company`);

--
-- Contraintes pour la table `represent`
--
ALTER TABLE `represent`
  ADD CONSTRAINT `fk_child_table_parent_table` FOREIGN KEY (`Qualité`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `fk_company_etranger` FOREIGN KEY (`Ville`) REFERENCES `cities` (`id`);

--
-- Contraintes pour la table `represent_company`
--
ALTER TABLE `represent_company`
  ADD CONSTRAINT `represent_company_ibfk_1` FOREIGN KEY (`id_company_etranger`) REFERENCES `company` (`id_company`),
  ADD CONSTRAINT `represent_company_ibfk_2` FOREIGN KEY (`id_represent`) REFERENCES `represent` (`id_rep`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
