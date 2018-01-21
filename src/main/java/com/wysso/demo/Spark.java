package com.wysso.demo;

import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;

import java.util.Arrays;
import java.util.List;

/**
 * 类描述：
 *
 * @author liangyuwu
 * @Time 2018/1/19 12:45
 */
public class Spark {

    public static void main(String[] args) {

        SparkConf conf = new SparkConf().setAppName("test").setMaster("spark://172.24.5.64:8080")
                .set("spark.driver.host", "10.13.18.18").set("spark.driver.port", "8080");
        Integer sum =0;
        JavaSparkContext context = new JavaSparkContext(conf);
        context.addJar("E:\\ideaWorkSpace\\merchant\\demo\\wysso-server\\out\\artifacts\\wysso_server_jar\\wysso-server.jar");

        List<Integer> data = Arrays.asList(1, 2, 3, 4, 5);

        JavaRDD<Integer> jd = context.parallelize(data);

        long l = jd.count();
        System.out.println(l);

    }
}
