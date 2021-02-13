### Zadania w terminalu
 Zainstaluj dockera https://docs.docker.com/docker-for-windows/install/
 
 W terminalu przejdź do folder, w którym masz katalog `music_shop`
 uruchom komendę `docker-compose up -d`
 
 Jeśli Ci się wszystko poprawnie zainstalowało to wpisz w terminalu: `docker exec -it mysql_music_shop bash`
 
 Powinieneś mieć jakiś taki prompt: `root@007a475cf0eb:/# `
 
 Wpisz `mysql -u root -p` i podaj hasło root — prompt powinien być `mysql>`



wykonaj komendę `SHOW DATABASES;` a potem `USE music_shop`. 

Projektowanie bazy to jeden z ważniejszych etapów tworzenia aplikacji. 
Chcemy utworzyć sklep internetowy z płytami muzycznymi - zastanów się jakie tabele powinniśmy mieć (na razie bez relacji).
Utwórz wszystkie tabele za pomocą 'CREATE TABLE.....'.
Zapisz kody i wstaw poniżej:

