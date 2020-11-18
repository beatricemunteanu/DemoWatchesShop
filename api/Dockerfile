FROM php:7-apache

RUN apt-get update; \
	apt-get install openssl libssl-dev libcurl4-openssl-dev -y; \
	pecl install mongodb; \
	echo "extension=mongodb.so" > /usr/local/etc/php/conf.d/mongodb.ini 
	


#Install composer
RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer

RUN apt-get install -y git 
RUN composer require mongodb/mongodb
RUN a2enmod rewrite
RUN a2enmod headers
RUN echo "session.save_path = /tmp" > /usr/local/etc/php/php.ini-development
#RUN cd ~; \
    #chown -R www-data:www-data /usr/local/etc/php/session


COPY . /var/www/html/api
WORKDIR /var/www/html/api
