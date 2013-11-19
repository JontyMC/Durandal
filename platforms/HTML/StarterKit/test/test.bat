@ECHO OFF
SET jqueryPath="../lib/jquery/jquery-1.9.1.min.js"
SET phantomArgs=scenario\phantom\run.js %jqueryPath% "../test.html" "tests"

IF "%~1"=="" (
    scenario\phantom\scenariorunner %phantomArgs% --no-debug --json-reporter --domain="http://test/"
) ELSE (
    IF "%~1"=="--teamcity" (
        scenario\phantom\scenariorunner %phantomArgs% --no-debug --teamcity
    ) ELSE (
        scenario\phantom\phantomjs %phantomArgs% %*
    )
)