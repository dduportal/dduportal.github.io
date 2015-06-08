.PHONY: presentation

WEB_SRV_NAME = prez

presentation:
	@docker kill $(WEB_SRV_NAME) >/dev/null || :
	@docker rm $(WEB_SRV_NAME) >/dev/null  || :
	@docker run -d --name $(WEB_SRV_NAME) -v $(CURDIR):/www -p 80:80 fnichol/uhttpd >/dev/null 
	@echo http://$$(boot2docker ip 2>/dev/null):80
