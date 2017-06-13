Headless chrome in CI
---------------------

* Simple setup to run headless browser tests with nodejs in CI (check .travis.yml)
* pre-requisities

```
docker
node 8
```

* Run chrome in headless mode, execute tests, take screenshot

```
docker run -it --rm --name chrome --shm-size=1024m --cap-add=SYS_ADMIN \
                  -p=127.0.0.1:4444:4444 \
                  yukinying/chrome-headless-browser-selenium
npm test
open snapshot.png
docker stop chrome
```
