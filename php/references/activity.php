<?php
    function registerActivity(string $user, string $action, array &$record) {
        $record[] = [
            'user' => $user,
            'action' => $action,
            'time' => date('Y-m-d H:i:s')
        ];
    }

    $log = [];

    registerActivity('Rafael', 'login', $log);
    registerActivity('Alfredo', 'edit profile', $log);
    registerActivity('Arun', 'logout', $log);

    print_r($log);
?>