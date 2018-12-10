package com.tecforce.test;

import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.w3c.dom.Document;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.io.StringReader;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@SpringBootTest
@TestPropertySource(locations = "classpath:application-test.properties")
public class TestApplicationTests {

    @Test
    public void contextLoads() {}

    @Test
    public void parseStr() throws ParserConfigurationException, IOException, SAXException {
        String currentNode = "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/29.gif\"/>\n<BR />" +
                "\n<b>Current Conditions:</b>\n<BR />Partly Cloudy\n<BR />\n<BR />\n<b>Forecast:</b>" +
                "\n<BR /> Fri - Sunny. High: 33Low: 15\n<BR /> Sat - Mostly Sunny. High: 34Low: 17" +
                "\n<BR /> Sun - Partly Cloudy. High: 35Low: 22\n<BR /> Mon - Mostly Cloudy. High: 37Low: 20" +
                "\n<BR /> Tue - Partly Cloudy. High: 31Low: 23\n<BR />\n<BR />" +
                "\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2077746/\">" +
                "Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>";
        List<String> list = Arrays.asList(currentNode.split("\n"));
        String resultNode = "";
        Pattern p = Pattern.compile("\\<!\\[CDATA\\[<img src=\"|\"/>");
        Matcher m = p.matcher(list.get(0));
        while (m.find()) {
            resultNode = m.replaceAll("");
        }
        System.out.println(resultNode);
    }
}