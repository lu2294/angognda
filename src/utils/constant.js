// 记录子app最后一个url需要用到，根据前缀判断，如uap为uap项目
const routeUrlList =
{
    '威胁感知运维中心': 'uap',
    '系统设置': 'system',
    '终端安全控制台': 'eum'
}
// 接口白名单，Map
const whiteInterface = {
    'uapapi/cluster/metrics/multiple': true,
    'uapapi/system/notifications': true,
    'uapapi/': true,
    'uapapi/system/cluster/nodes': true,
    'uapapi/plugins/org.graylog.plugins.forscripts/scripts/PR/getLpPrStatus': true,
    'uapapi/cluster': true,
    'uapapi/plugins/org.graylog.plugins.forscripts/scripts/AE_AGENT/getDeviceInfo': true,
    'uapapi/plugins/org.graylog.plugins.forscripts/scripts/CTDI_TRIAGE/getTriageHistory': true,
    'uapapi/plugins/org.graylog.plugins.forscripts/scripts/TRA_TRIAGE/getTriageHistory': true,
    'uapapi/plugins/org.graylog.plugins.forscripts/scripts/ACTIVE_UPDATE/getUpdateStatus': true,
    'uapapi/search/universal/relative': true,
    'uapapi/search/universal/relative/histogram': true,
    'uapapi/streams/alerts': true,
    'uapapi/cluster/inputstates': true,
    'uapapi/system/messages': true,
    'uapapi/cluster/jobs': true,
    'systemapi/system/appmgmt/finWait': true,
    'uapapi/plugins/org.graylog.plugins.forscripts/scripts/THREAT_OVERVIEW/getAlarmFromTDA':true,
    'uapapi/plugins/org.graylog.plugins.forscripts/scripts/THREAT_OVERVIEW/getPotentialViolation':true,
    'uapapi/plugins/org.graylog.plugins.forscripts/scripts/THREAT_OVERVIEW/getInterceptViolationTop5':true,
    'uapapi/plugins/org.graylog.plugins.forscripts/scripts/THREAT_OVERVIEW/getCenterData':true,
    'uapapi/plugins/org.graylog.plugins.forscripts/scripts/THREAT_OVERVIEW/getPotentialViolationType':true,
    'uapapi/plugins/org.graylog.plugins.forscripts/scripts/THREAT_OVERVIEW/getHotViolation':true,
}

export { routeUrlList, whiteInterface }