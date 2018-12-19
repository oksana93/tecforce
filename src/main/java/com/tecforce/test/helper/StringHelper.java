package com.tecforce.test.helper;

import org.apache.commons.lang3.StringUtils;

import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringHelper {
    public static String parseDescription(String description) {
        String imageUrl = "";
        if (StringUtils.isNoneEmpty(description)) {
            List<String> list = Arrays.asList(description.split("\n"));
            Pattern p = Pattern.compile("\\<!\\[CDATA\\[<img src=\"|\"/>");
            Matcher m = p.matcher(list.get(0));
            while (m.find()) {
                imageUrl = m.replaceAll("");
            }
        }
        return imageUrl;
    }
}
