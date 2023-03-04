module.exports = {
    /**
     * translation for module directive
     * @property {Object}
     */
    directive : require('@/modules/directive/i18n/zh.lang.js'),
    /**
     * translation for module panel
     * @property {Object}
     */
    panel : require('@/modules/panel/i18n/zh.lang.js'),
    /**
     * translation for module mock 
     * @property {Object}
     */
    mock : require('@/modules/mock/i18n/zh.lang.js'),

    test : require('@/modules/test/i18n/zh.lang.js'),
    document : require('@/modules/document/i18n/zh.lang.js'),
    environment : require('@/modules/environment/i18n/zh.lang.js'),
    project : require('@/modules/project/i18n/zh.lang.js'),
    plugin : require('@/modules/plugin/i18n/zh.lang.js'),
    app : {
        initLoadingStepDatabaseSetup : '正在配置数据库',
        initLoadingStepServerSetup : '正在配置服务器',
        initLoadingStepI18nSetup : '加载国际化配置',
        initLoadingStepDirectionarySetup : '加载数据字典',
        initLoadingPlugins : '加载插件',
        actionRecorderTitle : 'UI 测试脚本生成器',
        actionRecorderDesc : '该生成器用于生成 Bittly 的功能测试脚本，或者当 Bittly 发生错误时，可以使用该脚本录制操作过程来重现错误以方便修复',
        browserTip : '由于浏览器限制，部分功能可能会出现不可用的情况 ~~~ 您可下载 Bittly 在您本地使用，可完全离线 (～￣▽￣)～',
        browserDownloadClient : '下载 Bittly',
        browserOpenDevTools : '您可以通过浏览器菜单手动打开开发者工具 ~~~ ',
        environmentNotSupportAction : '当前运行环境不支持该操作',
        environmentBrowserVersionTooOld : 'Bittly 在线运行 需要 Chrome 版本高于或等于 89',
        environmentBrowserNotSupport : '在线版本目前仅支持 Chrome ~~~ ',
        environmentCheckFailed : '运行环境检查失败',

        about : '关于',
        quitConfirm : '是否退出应用？',
        device : {
            infoTitle : '设备信息',
            dataTrans : '数据统计',
            dataTransSend : '发送',
            dataTransReceive : '接收',
            disconnectMessage : '是否断开设备连接 ?',
        },
        setting : {
            title : '配置',
            language : '语言',
        },
        update: {
            title : '更新',
            checkingForUpdate : '正在检查更新 ...',
            error : '更新失败 ~~~',
            newpackAvailable : '新版本已发布',
            newpackInfo : '版本号 : {version} 打包时间 : {time}',
            releaseNote : '更新说明',
            downloading : '下载中 ...',
            downloaded : '下载完成',
            noUpdateAvailable : '当前已是最新版，无需更新',
            restartToApplyUpdate : '下载完成，重启后生效',
            modalTitle : '更新提示',
            version : '版本号',
            packTime : '打包时间',
            description : '更新内容',
            btnIgnoreThisUpdate : '忽略这次更新',
            btnUpdate : '更新',
            publishTime : '发布时间',
        },
        menu : {
            file : {
                label : '文件',
                refresh : '刷新',
                opendevtool : '打开开发者工具',
                alwaysOnTopEnable : '保持窗口置顶',
                alwaysOnTopDisable : '取消窗口置顶',
                exit:'退出',
            },
            setting : '配置',
            tool : {
                label : '工具',
                serialportServer : '串口服务端',
                tcpServer : 'TCP 服务端',
                udpServer : 'UDP 服务端',
                terminal : '模拟终端',
                calculator : '常用计算',
                wsServer : 'Web Socket 服务端',
            },
            help : {
                label : '帮助',
                getStart : '使用说明',
                update : '更新',
                about : '关于',
                feedback : '反馈',
                actionRecord : '操作录制',
            }
        },
        tool : {
            regexIsNotAvailable : '无法解析正则表达式 : {0}',
            scriptExecuteFailed : '脚本执行失败 : {0}',
            responseHandler : '响应方式',
            responseHandlerMoveForward : '提前',
            responseHandlerMoveBack : '延后',
            responseHandlerOrder : '响应顺序',
            responseHandlerManual : '手动',
            responseHandlerEcho : 'Echo',
            responseHandlerRandom : '随机',
            responseHandlerScript : '脚本',
            responseHandlerMatch : '匹配',
            responseHandlerMatchColStatus : '状态',
            responseHandlerMatchColMode : '模式',
            responseHandlerMatchColNote : '说明',
            responseHandlerMatchColTemplate : '模板',
            responseHandlerMatchColResponse : '响应',
            responseHandlerMatchColResponseEditorTitle : '响应内容编辑',
            responseHandlerMatchColOperations : '操作',
            viewerMode : '查看方式',
            dataViewerMergeRecentlyReceiveData : '合并数据',
            transDataSize : '数据量',
        },
        toolCalculator : {
            windowTitle : '常用计算',
            colorRingResistanceValue : '色环电阻阻值计算',
            colorRingResistanceValueValue : '阻值',
            colorRingResistanceValueErrorRange : '误差',
            dataValidation : '数据校验',
            dataValidationParityChecking : '奇偶校验',
            dataValidationEvenParityChecking : '偶校验',
            dataValidationOddParityChecking : '奇校验',
            dataValidationSumCheck : '累加和',
        },
        toolTerminal : {
            windowTitle : '终端',
            connectionOpenFailed : '通讯打开失败',
        },
        toolTcpServer : {
            windowTitle : 'TCP 服务端',
            serverStarted : '服务器已启动',
            serverStoped : '服务器已停止',
            btnStart : '启动',
            btnStop : '停止',
            noClients : '暂无客户端连接',
            noData : '暂无数据',
            btnCleanInput : '清空输入',
            btnCleanViewer : '清空显示区',
            dataFormat : {
                text : '字符串',
                hex : 'HEX',
            },
        },
        toolUdpServer : {
            windowTitle : 'UDP 服务端',
            serverStarted : '服务器已启动',
            serverStoped : '服务器已停止',
            btnStart : '启动',
            btnStop : '停止',
            noClients : '暂无客户端连接',
            noData : '暂无数据',
            btnCleanInput : '清空输入',
            btnCleanViewer : '清空显示区',
            dataFormat : {
                text : '字符串',
                hex : 'HEX',
            },
        },
        errorHandler : {
            title : '运行错误',
            reportTip : '额 ~~~ 非常抱歉 ！应用貌似出了点问题，您可以通过以下方式进行反馈，我会尽快修复的  ＞﹏＜',
            errorIgnore : '忽略',
        },
        feedback : {
            title : '反馈',
            textMessageInputPlaceholder : '请输入消息内容，输入回车发送',
            messageSendFailed : '消息发送失败：{0}',
            messagePullFailed : '消息拉取失败：{0}',
            messageSendFailedEmpty : '无法发送空白消息',
            imageFileSelectFilterName : '图片',
            imageOpenFailed : '图片打开失败',
        }
    },
    user : {
        loginOrRegister : '登录 / 注册',
        logout : '退出',
        login : '登录',
        loginByAccountOrEmail : '邮箱 / 账号',
        password : '密码',
        forgetPassword : '忘记密码',
        register : '注册',
        account : '账号',
        email : '邮箱',
        sendEmailVerifyCode : '发送验证码',
        emailVerifyCode : '邮箱验证码',
        passwordReset : '重置密码',
        newPassword : '新密码',
        accountOnlySupportNumberAndLettersAlsoStartWithLetters : '仅接受小写字母和数字组合，并且以字母开头',
        accountLengthBetween4And16Chars : '长度需要在4~16个字符之间',
        emailVerifyCodeIsFourNumbers : '验证码长度为4个数字字符',
        passwordLengthBetween6And32Chars : '长度需要在6~32个字符之间',
        accountAlreadyExists : '已经被占用',
        emailAlreadExists : '已经被占用',
        emailSendFailed : '邮件发送失败',
        emailSendAndAvailableIn10Mins : '邮件已发送，请将收到的验证码填入输入框中，验证码10分钟内有效',
        registerSuccess : '用户注册成功',
        passwordResetSuccess : '密码重置成功',
        passwordResetFailed : '密码重置失败',
        loginFailed : '登录失败',
        loginSuccess : '登录成功',
        logoutSuccess : '用户已退出',
    },
    button : {
        save : '保存',
        ok : '确定',
        cancel : '取消',
        refresh : '刷新',
        newFolder : '新建文件夹',
        search : '搜索',
        rename : '重命名',
        delete : '删除',
        copy : '复制',
        send : '发送',
        add : '新增',
        operations : '操作',
        create : '创建',
        execute : '执行',
        yes : '确定',
        no : '取消',
        connect:'连接',
        disconnect : '断开连接',
        install : '安装',
        apply : '应用',
        close : '关闭',
        edit : '编辑',
        export : '导出',
        setting : '设置',
        clearAll : '清空',
        start : '开始',
        stop : '停止',
    },
    messages : {
        dialogTitle : {
            tip : '提示',
            error : '错误',
        },
        untitled : '未命名',
        note : '说明',
        fileSaveSuccess : '文件已保存',
        saveSuccess : '保存成功',
        saveFailed : '保存失败',
        example : '例如',
        exampleContent : '例如：{0}',
        cannotBeEmpty : '不可为空',
        formatError : '格式不正确',
        tip : '提示',
        send : '发送',
        receive : '接收',
        disable : '禁用',
        enable : '启用',
        stringToHexIllegalChars : '字符串 "{0}" 转换为HEX失败 : 检测到非十六进制字符',
    },
    unit : {
        second : '秒',
    },
};