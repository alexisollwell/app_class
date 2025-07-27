USE [CollegeService]
GO
/****** Object:  Schema [cs]    Script Date: 7/26/2025 5:35:50 PM ******/
CREATE SCHEMA [cs]
GO
/****** Object:  Table [cs].[ServiceActivities]    Script Date: 7/26/2025 5:35:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [cs].[ServiceActivities](
	[serviceActivitieId] [int] IDENTITY(1,1) NOT NULL,
	[service_id] [int] NULL,
	[description] [nvarchar](max) NULL,
	[postingDate] [date] NULL,
	[hours] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[serviceActivitieId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [cs].[TotalActivityHours]    Script Date: 7/26/2025 5:35:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [cs].[TotalActivityHours]
AS
SELECT service_id, SUM(hours) AS totalHours
FROM   cs.ServiceActivities
GROUP BY service_id
GO
/****** Object:  Table [cs].[ServiceType]    Script Date: 7/26/2025 5:35:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [cs].[ServiceType](
	[serviceTypeId] [int] IDENTITY(1,1) NOT NULL,
	[type] [varchar](100) NULL,
	[description] [nvarchar](max) NULL,
	[quantityToComplete] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[serviceTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [cs].[Student]    Script Date: 7/26/2025 5:35:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [cs].[Student](
	[studentId] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](100) NULL,
	[phoneNumber] [varchar](50) NULL,
	[careerInCourse] [nvarchar](100) NULL,
	[classGroup] [nvarchar](50) NULL,
	[enrollmentNumber] [nvarchar](50) NULL,
	[careerModality] [nvarchar](50) NULL,
	[grade] [int] NULL,
	[studentStatus_id] [int] NULL,
	[institutionalEmail] [nvarchar](100) NULL,
	[user_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[studentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [cs].[Service]    Script Date: 7/26/2025 5:35:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [cs].[Service](
	[serviceId] [int] IDENTITY(1,1) NOT NULL,
	[student_id] [int] NULL,
	[serviceType_id] [int] NULL,
	[servicesStartDate] [date] NULL,
	[service_status_id] [int] NULL,
	[supervisorName] [nvarchar](100) NULL,
	[supervisorContactNumber] [nvarchar](50) NULL,
	[programObjective] [nvarchar](max) NULL,
	[supervisorPosition] [nvarchar](100) NULL,
	[receivingUnit_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[serviceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [cs].[ServiceProgressView]    Script Date: 7/26/2025 5:35:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [cs].[ServiceProgressView]
AS
SELECT sv.serviceId, s.studentId, s.name, s.institutionalEmail, st.type, tah.totalHours, CASE WHEN st.quantityToComplete = 0 THEN 0 ELSE CASE WHEN (CAST(tah.totalHours AS FLOAT) / st.quantityToComplete) * 100 > 100 THEN 100 ELSE (CAST(tah.totalHours AS FLOAT) 
             / st.quantityToComplete) * 100 END END AS serviceProgress, st.quantityToComplete
FROM   cs.Student AS s INNER JOIN
             cs.Service AS sv ON sv.student_id = s.studentId INNER JOIN
             cs.ServiceType AS st ON st.serviceTypeId = sv.serviceType_id INNER JOIN
             cs.TotalActivityHours AS tah ON tah.service_id = sv.serviceId
GO
/****** Object:  View [cs].[ServiceActivitiesByUser]    Script Date: 7/26/2025 5:35:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [cs].[ServiceActivitiesByUser] AS
SELECT
  sa.serviceActivitieId,
  s.student_id,
  sa.description,
  sa.postingDate,
  sa.hours
FROM [CollegeService].[cs].[ServiceActivities] sa
LEFT JOIN cs.[Service] AS s ON s.serviceId = sa.service_id
LEFT JOIN cs.Student AS st ON s.student_id = st.studentId
GO
/****** Object:  Table [cs].[Documents]    Script Date: 7/26/2025 5:35:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [cs].[Documents](
	[documentId] [int] IDENTITY(1,1) NOT NULL,
	[docStatus_id] [int] NULL,
	[64codedFile] [nvarchar](max) NULL,
	[fileType] [nvarchar](50) NULL,
	[service_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[documentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [cs].[DocumentStatusList]    Script Date: 7/26/2025 5:35:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [cs].[DocumentStatusList](
	[docStatusId] [int] IDENTITY(1,1) NOT NULL,
	[status] [varchar](100) NULL,
	[description] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[docStatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [cs].[ReceivingUnit]    Script Date: 7/26/2025 5:35:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [cs].[ReceivingUnit](
	[receivingUnitId] [int] IDENTITY(1,1) NOT NULL,
	[institutionName] [nvarchar](255) NULL,
	[contactNumber] [nvarchar](50) NULL,
	[institutionDirection] [nvarchar](255) NULL,
	[contactEmail] [nvarchar](255) NULL,
	[principalActivities] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[receivingUnitId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [cs].[ServiceStatusList]    Script Date: 7/26/2025 5:35:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [cs].[ServiceStatusList](
	[serviceStatusId] [int] IDENTITY(1,1) NOT NULL,
	[status] [varchar](100) NULL,
	[description] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[serviceStatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [cs].[User]    Script Date: 7/26/2025 5:35:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [cs].[User](
	[userId] [int] IDENTITY(1,1) NOT NULL,
	[userName] [varchar](50) NOT NULL,
	[pssKey] [nvarchar](100) NOT NULL,
	[email] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_cs.User] PRIMARY KEY CLUSTERED 
(
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [cs].[Documents]  WITH CHECK ADD FOREIGN KEY([docStatus_id])
REFERENCES [cs].[DocumentStatusList] ([docStatusId])
GO
ALTER TABLE [cs].[Documents]  WITH CHECK ADD FOREIGN KEY([service_id])
REFERENCES [cs].[Service] ([serviceId])
GO
ALTER TABLE [cs].[Service]  WITH CHECK ADD FOREIGN KEY([serviceType_id])
REFERENCES [cs].[ServiceType] ([serviceTypeId])
GO
ALTER TABLE [cs].[Service]  WITH CHECK ADD FOREIGN KEY([service_status_id])
REFERENCES [cs].[ServiceStatusList] ([serviceStatusId])
GO
ALTER TABLE [cs].[Service]  WITH CHECK ADD FOREIGN KEY([student_id])
REFERENCES [cs].[Student] ([studentId])
GO
ALTER TABLE [cs].[Service]  WITH CHECK ADD  CONSTRAINT [ReceivingUnitToService] FOREIGN KEY([receivingUnit_id])
REFERENCES [cs].[ReceivingUnit] ([receivingUnitId])
GO
ALTER TABLE [cs].[Service] CHECK CONSTRAINT [ReceivingUnitToService]
GO
ALTER TABLE [cs].[ServiceActivities]  WITH CHECK ADD FOREIGN KEY([service_id])
REFERENCES [cs].[Service] ([serviceId])
GO
ALTER TABLE [cs].[Student]  WITH CHECK ADD  CONSTRAINT [StudentToUser] FOREIGN KEY([user_id])
REFERENCES [cs].[User] ([userId])
GO
ALTER TABLE [cs].[Student] CHECK CONSTRAINT [StudentToUser]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "s"
            Begin Extent = 
               Top = 9
               Left = 57
               Bottom = 206
               Right = 311
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "sv"
            Begin Extent = 
               Top = 9
               Left = 368
               Bottom = 206
               Right = 680
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "st"
            Begin Extent = 
               Top = 9
               Left = 737
               Bottom = 206
               Right = 1003
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "tah"
            Begin Extent = 
               Top = 207
               Left = 57
               Bottom = 350
               Right = 279
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'cs', @level1type=N'VIEW',@level1name=N'ServiceProgressView'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'cs', @level1type=N'VIEW',@level1name=N'ServiceProgressView'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "ServiceActivities (cs)"
            Begin Extent = 
               Top = 9
               Left = 57
               Bottom = 206
               Right = 308
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 12
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'cs', @level1type=N'VIEW',@level1name=N'TotalActivityHours'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'cs', @level1type=N'VIEW',@level1name=N'TotalActivityHours'
GO
