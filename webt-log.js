/** @author web@2dsd.ru | webtitov.ru
 * Небольшой плагин для более удобного вывода логов
 * **/


function log($text, $type) {
    const clog = console.log;
    const enable_log_css = '%c ';
    let clog_style, clog_type;
    const log_type = () => {
        switch ($type) {
            case 'error':
                clog_type = '[ERROR] ';
                break;
            case 'warning':
                clog_type = '[WARNING] ';
                break;
            case 'success':
                clog_type = '[SUCCESS] ';
                break;
            case 'default':
                clog_type = '';
                break;
        }
        return clog_type;
    };
    const log_style = () => {
        switch ($type) {
            case 'error':
                clog_style = 'color: red;';
                break;
            case 'warning':
                clog_style = 'color: orange;';
                break;
            case 'success':
                clog_style = 'color: green;';
                break;
            case 'default':
                clog_style = 'color: black;';
                break;
        }
        return clog_style;
    }

    return clog(enable_log_css + log_type() + $text, log_style());
}